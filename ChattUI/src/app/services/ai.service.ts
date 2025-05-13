import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { AppConfig } from '../app.config';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AIService {

  private aiUrl = AppConfig.aiUrl;

  constructor(private http: HttpClient) { }

  getAiMessage(question: string): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.aiUrl}/Message`, JSON.stringify(question), { headers, responseType: 'text' });
  }

  resetChatMessages() {
    return this.http.post(`${this.aiUrl}/ResetChatMessages`, {});
  }
}
