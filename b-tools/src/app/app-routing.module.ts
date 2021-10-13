import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main/main.component';
import { NoPageFoundComponent } from './components/main/no-page-found/no-page-found.component';
import { UnAuthLayoutComponent } from './components/unAuth/unAuth.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: '',
    component: UnAuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./components/unAuth/unAuth.module').then(
            (m) => m.UnAuthModule
          ),
      },
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./components/main/main.module').then((m) => m.MainModule),
      },
    ],
  },
  { path: '**', component: NoPageFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
