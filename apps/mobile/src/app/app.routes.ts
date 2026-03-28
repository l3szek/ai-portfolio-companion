import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.page').then(
        (m) => m.DashboardPage
      ),
  },
  {
    path: 'chat',
    loadComponent: () =>
      import('./features/chat/chat.page').then((m) => m.ChatPage),
  },
];
