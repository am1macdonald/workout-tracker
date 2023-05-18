import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'workout',
    pathMatch: 'full',
  },
  {
    path: 'workout',
    loadComponent: () =>
      import('./workout/workout.page').then((m) => m.WorkoutPage),
  },
  {
    path: 'calendar',
    loadComponent: () => import('./calendar/calendar.page').then( m => m.CalendarPage)
  },
];
