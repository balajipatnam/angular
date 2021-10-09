/**
 * Created BY Balaji
 * Last Last Modified By Balaji on 10/10/2018
 * Last Modified Description : Added Comment
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { SignInComponent } from './signin/signin.component';
import { UnAuthRoutes } from './unAuth.routing';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(UnAuthRoutes),
  ],
  declarations: [SignInComponent],
})
export class UnAuthModule {}
