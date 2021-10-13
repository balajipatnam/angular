/**
 * Created BY Balaji
 * Last Last Modified By Balaji on 10/10/2018
 * Last Modified Description : Added Comment
 */
import { Routes } from '@angular/router';
import { SignInComponent } from './signin/signin.component';

export const UnAuthRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: SignInComponent,
      },
    ],
  },
];
