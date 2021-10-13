/**
 * Created BY Balaji
 * Last Last Modified By Balaji on 10/10/2018
 * Last Modified Description : Added Comment
 */
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const MainRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: HomeComponent,
      },
    ],
  },
];
