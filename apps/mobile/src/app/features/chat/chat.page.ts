import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
  templateUrl: './chat.page.html',
})
export class ChatPage {}
