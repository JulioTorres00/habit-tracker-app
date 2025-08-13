// app.routes.ts (main routing file)
import { Routes } from '@angular/router';

export const FUNCTIONS_ROUTES: Routes = [
  { path: '', redirectTo: 'add-task', pathMatch: 'full' },
  {
    path: 'add-task',
    loadComponent: () => import('./add-task/add-task').then((m) => m.AddTask),
  },
  {
    path: 'delete-task',
    loadComponent: () =>
      import('./delete-task/delete-task').then((m) => m.DeleteTask),
  },
];
