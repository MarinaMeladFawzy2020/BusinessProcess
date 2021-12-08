import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PrimengModule } from './primeng.module';
import { ProcessroletreeComponent } from './components/processroles/processroletree/processroletree.component';
import { ProcessroledetailsComponent } from './components/processroles/processroledetails/processroledetails.component';
import { ProcessrolesearchComponent } from './components/processroles/processrolesearch/processrolesearch.component';
import { AddprocessroleComponent } from './components/processroles/addprocessrole/addprocessrole.component';
import { AddmemberComponent } from './components/processroles/addmember/addmember.component';
import { TesttablegroupComponent } from './components/testtablegroup/testtablegroup.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    TesttablegroupComponent,
    ProcessroletreeComponent,
    ProcessroledetailsComponent,
    ProcessrolesearchComponent,
    AddprocessroleComponent,
    AddmemberComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 

    PrimengModule   

    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS , useClass: AuthInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
