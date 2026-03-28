import { Component } from '@angular/core';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { pieChartOutline, chatbubbleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon],
  templateUrl: './tabs.page.html',
})
export class TabsPage {
  constructor() {
    addIcons({ pieChartOutline, chatbubbleOutline });
  }
}
