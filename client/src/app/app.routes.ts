import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'schedule',
    loadChildren: () =>
      import('./features/schedule/schedule.routes').then(
        (m) => m.SCHEDULE_ROUTES,
      ),
  },
  {
    path: 'functions',
    loadChildren: () =>
      import('./features/functions/functions.routes').then(
        (m) => m.FUNCTIONS_ROUTES,
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'schedule',
  },
  {
    path: '**',
    redirectTo: 'schedule',
  },
];
