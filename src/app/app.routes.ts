import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/auth/pages/login/login.component').then(
        (c) => c.LoginComponent,
      ),
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
          import('./features/dashboard/pages/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent,
          ),
      },
      {
        path:'workers',
        loadComponent: ()=>
          import('./features/dashboard/pages/workers/workers.component').then(
            (c) => c.WorkersComponent,

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
