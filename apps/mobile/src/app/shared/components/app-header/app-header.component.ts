import { Component } from '@angular/core';
import { IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IonToolbar],
  templateUrl: './app-header.component.html',
})
export class AppHeaderComponent {}
