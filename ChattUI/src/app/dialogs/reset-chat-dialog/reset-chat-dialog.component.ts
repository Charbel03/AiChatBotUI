import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-reset-chat-dialog',
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './reset-chat-dialog.component.html',
  styleUrl: './reset-chat-dialog.component.css'
})
export class ResetChatDialogComponent {

  constructor(public dialogRef: MatDialogRef<ResetChatDialogComponent>) {}

  onYes(): void {
    this.dialogRef.close(true);
  }

  onNo(): void {
    this.dialogRef.close(false);
  }
}
