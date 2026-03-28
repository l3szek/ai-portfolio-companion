import { Routes } from '@angular/router';
import { TabsPage } from './features/tabs/tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.page').then(m => m.DashboardPage),
      },
      {
        path: 'chat',
        loadComponent: () =>
          import('./features/chat/chat.page').then(m => m.ChatPage),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/dashboard',
    pathMatch: 'full',
  },
];
