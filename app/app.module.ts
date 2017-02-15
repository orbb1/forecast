import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { RoutingModule } from './modules/routing-module/routing.module';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { HomePageModule } from './pages/home-page/home-page.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RoutingModule, LoginPageModule, HomePageModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
