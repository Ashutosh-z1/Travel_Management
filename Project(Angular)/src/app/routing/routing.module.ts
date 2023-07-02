import { NgModule, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';  
import { NoComponentComponent } from '../no-component/no-component.component'; 
import { authGuard } from '../guards/auth.guard';
import { AdminDashbordComponent } from '../admin-dashbord/admin-dashbord.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddUserComponent } from '../Users/add-user/add-user.component';
import { EditUserComponent } from '../Users/edit-user/edit-user.component';
import { DeleteUserComponent } from '../Users/delete-user/delete-user.component';
import { GetUserComponent } from '../Users/get-user/get-user.component';
import { HomeNavComponent } from '../home-nav/home-nav.component';
import { CommonDashboardComponent } from '../common/common-dashboard/common-dashboard.component';

const routes : Routes =
 [
  {path:'', component:LoginComponent},

//  {path:'homenav', component:HomeNavComponent,  canActivate : [authGuard],
//  children :[
//  {path : "add-user",component:AddUserComponent },
//  {path : "edit-user", component:EditUserComponent},
//  {path : "delete-user", component:DeleteUserComponent},
//  {path : "get-user", component:GetUserComponent},
//  {path : '' , component: HomeNavComponent}
//  ]
 
// },
// {path : 'user' , component:UserComponent, canActivate : [authGuard]},
// {path:'dashboard', component:HomeNavComponent},   
//{path:'Admin' , component:AdminDashbordComponent},
// {path : "add-user",component:AddUserComponent },
// {path : "edit-user", component:EditUserComponent},
// {path : "delete-user", component:DeleteUserComponent},
// {path : "get-user", component:GetUserComponent},
// , canActivate : [authGuard]
 {path :'homenav',  canActivate: [authGuard],
 loadChildren: () => import('src/app/home/home.module').then(m => m.HomeModule)},

 
  //{path:'UserRoleMapping', component:UserRoleMappingComponent},
  // {path:'login', component:LoginComponent},
  {path : 'common', canActivate: [authGuard],
  loadChildren: () => import('src/app/commonrouting/common-type/common-type.module').then(m => m.CommonTypeModule)},
  
   {path:'login', component:LoginComponent},
   {path:'**', component:NoComponentComponent }

]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ], 
  exports:[RouterModule]
})

export class RoutingModule { }
export const Components = [LoginComponent ,NoComponentComponent  , HomeNavComponent , CommonDashboardComponent];
