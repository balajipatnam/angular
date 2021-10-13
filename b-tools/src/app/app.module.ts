import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './components/main/main.component';
import { UnAuthLayoutComponent } from './components/unAuth/unAuth.component';
import { NoPageFoundComponent } from './components/main/no-page-found/no-page-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UnAuthLayoutComponent,
    MainLayoutComponent,
    NoPageFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
