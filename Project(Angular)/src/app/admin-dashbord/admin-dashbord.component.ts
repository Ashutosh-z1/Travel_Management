import { Component  , OnInit} from '@angular/core';
import { AuthenticationService } from '../Services/authentication.service';
import { RouteService } from '../Services/route.service';
import { Router } from '@angular/router';
import { UsersService } from '../Services/users.service';
import { UserWithID } from '../Interface/UserWithId';
import { User } from '../Interface/User';

@Component({
  selector: 'app-admin-dashbord',
  templateUrl: './admin-dashbord.component.html',
  styleUrls: ['./admin-dashbord.component.css']
})
export class AdminDashbordComponent implements OnInit {

  constructor(private _auth : AuthenticationService , private _router : Router , private _userService : UsersService) {  }
loggedIn = false;
token:any;
ngOnInit(): void {
  console.log("init")
  this.token = this._auth.getBearerToken();
// this.token= localStorage.getItem("token");
 console.log("aaA"+ this.token)
 if(this.token!=null)
 {

  this.loggedIn=true;
  console.log("Logged ")
  
 }
 else 
 this.loggedIn=false;

this.GetUsers();

}


  logout()
{
 this._auth.removeBearerToken();
  //localStorage.removeItem("token");
  console.log("logout")
  this.loggedIn=false;
  //this._route.toLogin();
  this._router.navigate(["login"]);
 
}


Users1: UserWithID[]=[];
Users: User[]=[];
user: User = {id : 0,email : "N1ULL", firstName : "NUL1L",middleName : "NU1LL",lastName : "NUL1L",password : "NU1LL",contactNumber : "sadfkj",roleId : 9,departmentId : 10, managerId : null ,createdBy : "NULL", createdDate : new Date, modifiedBy : "N1ULL",modifiedDate : new Date, isActive : true};


GetUsers()
{

  this._userService.GetUsers().subscribe(res=>
    {
    console.log("skdf"+res)
    this.Users1= res;

  }); 
  console.log("print");
  console.log(this.Users1);
  
}

// AddUser(user: User)
//  {
   
//  console.log("here");
//  this._userService.AddUser(user).subscribe(res=>
//    {
//      console.log(res);
//    })
//  }
//  Register(regForm:any)
//  {
//    //console.log(regForm)
//    console.log("Rseg check");
//    console.log(regForm.controls.email.value);
//      //firstName:string;
     
//      this.user.email = regForm.controls.email.value;
//      this.user.firstName = regForm.controls.firstName.value;
//      this.user.middleName = regForm.controls.middleName.value;
//      this.user.lastName = regForm.controls.lastName.value;
//      this.user.password = regForm.controls.password.value;
//      this.user.contactNumber = regForm.controls.contactNumber.value;
//      this.user.roleId = regForm.controls.roleId.value;
//      this.user.departmentId = regForm.controls.departmentId.value;
//      this.user.managerId = regForm.controls.managerId.value;
//      this.user.createdBy = regForm.controls.createdBy.value;
//      this.user.createdDate = regForm.controls.createdDate.value;
//      this.user.modifiedBy = null;
//      this.user.modifiedDate = null;
//      this.user.isActive = true;
//    console.log("sakjdf");
//    this.AddUser(this.user);
//    //console.log(regForm.controls.txtName.value)
//  }

}
