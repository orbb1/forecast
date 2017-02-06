import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { RoutingModule } from './modules/routing-module/routing.module';
import { LoginPageModule } from './pages/login-page/login-page.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RoutingModule, LoginPageModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
