// app.routes.ts (main routing file)
import { Routes } from '@angular/router';

export const SCHEDULE_ROUTES: Routes = [
  { path: '', redirectTo: 'today', pathMatch: 'full' },
  {
    path: 'all',
    loadComponent: () => import('./all/all').then((m) => m.All),
  },
  {
    path: 'today',
    loadComponent: () => import('./today/today').then((m) => m.Today),
  },
];
