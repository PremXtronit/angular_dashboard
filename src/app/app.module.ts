import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from './service/auth.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
   RouterModule.forRoot([
     {
       path: '',
       component: LoginComponent
     },
     {
      path: 'dashboard',
      component: DashboardComponent
     }
   ] ),
   BrowserModule,
   FormsModule,
   HttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
