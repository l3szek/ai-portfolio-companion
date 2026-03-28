import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
  templateUrl: './dashboard.page.html',
})
export class DashboardPage {}
