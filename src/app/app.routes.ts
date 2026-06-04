import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/login/login.component').then((c) => c.LoginComponent),
  },

  {
    path: 'app',
    loadComponent: () =>
      import('./layout/admin-layout/admin-layout.component').then(
        (c) => c.AdminLayoutComponent,
      ),

    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent,
          ),
      },
      {
        path: 'workers',
        loadComponent: () =>
          import('./features/workers/workers.component').then(
            (c) => c.WorkersComponent,
          ),
      },
      {
        path: 'workers',
        loadComponent: () =>
          import('./features/workers/workers.component').then(
            (c) => c.WorkersComponent,
          ),
      },
      {
        path: 'daily-records',
        loadComponent: () =>
          import('./features/daily-records/daily-records.component').then(
            (c) => c.DailyRecordsComponent,
          ),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },

  {
    path: '**',
    redirectTo: '',
  },
];
