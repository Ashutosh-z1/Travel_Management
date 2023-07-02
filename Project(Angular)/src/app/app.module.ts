import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { NoComponentComponent } from './no-component/no-component.component';
import { Components,RoutingModule } from './routing/routing.module';

import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component';
import { AddUserComponent } from './Users/add-user/add-user.component';
import { EditUserComponent } from './Users/edit-user/edit-user.component';
import { DeleteUserComponent } from './Users/delete-user/delete-user.component';
import { GetUserComponent } from './Users/get-user/get-user.component';
import { CommonDashboardComponent } from './common/common-dashboard/common-dashboard.component';
import { AddRequestComponent } from './requrst/add-request/add-request.component';
import { ShowRequestComponent } from './requrst/show-request/show-request.component';
import {ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeNavComponent,
    Components,
    NoComponentComponent,
    AdminDashbordComponent,
    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    GetUserComponent,
    CommonDashboardComponent,
    AddRequestComponent,
    ShowRequestComponent,
    
    

   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutingModule,
    ReactiveFormsModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
