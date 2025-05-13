import { Component, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AIService } from '../../services/ai.service';
import { MatDialog } from '@angular/material/dialog';
import { ResetChatDialogComponent } from '../../dialogs/reset-chat-dialog/reset-chat-dialog.component';

@Component({
  selector: 'app-chat-page',
  imports: [FormsModule, CommonModule],
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.css'
})
export class ChatPageComponent implements AfterViewChecked{
  message: string = '';
  userMessages: string[] = []; 
  aiMessages: string[] = []; 
  isWaitingForResponse: boolean = false;
  typingIndicator: string = '';
  private typingInterval: any;

  @ViewChild('chatMessages') private chatMessages!: ElementRef;

  constructor(private aiService: AIService, private dialog: MatDialog ){}

  public sendMessage(message: string) {
    if (!message || this.isWaitingForResponse) return;

    this.userMessages.push(message);
    this.message = '';
    this.isWaitingForResponse = true;

    this.startTypingIndicator();

    this.aiService.getAiMessage(message).subscribe({
      next: (response) => {
        this.stopTypingIndicator();
        this.aiMessages.push(response);
        this.isWaitingForResponse = false;
        this.scrollToBottom();
      },
      error: (err) => {
        this.stopTypingIndicator();
        this.aiMessages.push("AI could not respond, please try again later.");
        this.isWaitingForResponse = false;
        this.scrollToBottom();
      }
    });

    setTimeout(() => this.scrollToBottom(), 0);
  }

  public resetChat() {

    const dialogRef = this.dialog.open(ResetChatDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {

      this.aiService.resetChatMessages().subscribe({
        complete: () => {
          this.userMessages = [];
          this.aiMessages = [];
        },
        error: err => console.error('Error:', err)
      });

      }
    });

  }

  private scrollToBottom(): void {
    try {
      this.chatMessages.nativeElement.scrollTop = this.chatMessages.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Scroll error:', err);
    }
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private startTypingIndicator() {
    this.typingIndicator = '.';
    let dots = '.';
    this.typingInterval = setInterval(() => {
      dots = dots.length < 3 ? dots + '.' : '.';
      this.typingIndicator = dots;
    }, 500);
  }

  private stopTypingIndicator() {
    clearInterval(this.typingInterval);
    this.typingIndicator = '';
  }
}
