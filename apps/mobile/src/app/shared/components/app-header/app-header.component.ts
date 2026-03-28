import { Component } from '@angular/core';
import { IonHeader, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IonHeader, IonToolbar],
  templateUrl: './app-header.component.html',
})
export class AppHeaderComponent {}
