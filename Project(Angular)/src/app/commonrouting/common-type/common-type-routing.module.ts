import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonDashboardComponent } from 'src/app/common/common-dashboard/common-dashboard.component';
import { AddRequestComponent } from 'src/app/requrst/add-request/add-request.component';
import { ShowRequestComponent } from 'src/app/requrst/show-request/show-request.component';

const routes: Routes = [{path:'', component:CommonDashboardComponent,
children :[
{path : "getrequest",component: ShowRequestComponent },
{path : "addrequest", component:AddRequestComponent},
{ path: '', redirectTo: '/common', pathMatch: 'full' },
]

},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonTypeRoutingModule { }
