import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeNavComponent } from '../home-nav/home-nav.component';
import { AddUserComponent } from '../Users/add-user/add-user.component';
import { EditUserComponent } from '../Users/edit-user/edit-user.component';
import { DeleteUserComponent } from '../Users/delete-user/delete-user.component';
import { GetUserComponent } from '../Users/get-user/get-user.component';
import { authGuard } from '../guards/auth.guard';


const routes: Routes = [
  {path:'', component:HomeNavComponent,
  children :[
  {path : "adduser",component:AddUserComponent },
  {path : "edituser/:id", component:EditUserComponent},
  {path : "deleteuser/:id", component:DeleteUserComponent},
  {path : "getuser", component:GetUserComponent},
  { path: '', redirectTo: '/homenav', pathMatch: 'full' },
  ]
  
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
