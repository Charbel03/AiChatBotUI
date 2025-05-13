import { Routes } from '@angular/router';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';

export const routes: Routes = [
    { path: 'chat', component: ChatPageComponent},
    { path: '', redirectTo: 'chat', pathMatch: 'full'}
    
];
