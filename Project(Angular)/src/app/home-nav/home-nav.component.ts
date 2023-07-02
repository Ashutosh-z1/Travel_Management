import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Services/authentication.service';
import { RouteService } from '../Services/route.service';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.css']
})
export class HomeNavComponent implements OnInit {

  constructor(private _auth : AuthenticationService , private _router : Router) {  }
loggedIn = false;
token:any;
Name : any;
successMessage: string = '';
ngOnInit(): void {
  
  console.log("init")
  this.token = this._auth.getBearerToken();
// this.token= localStorage.getItem("token");
 console.log("aaA  "+ this.token)
 if(this.token!=null)
 {
 
  //this.DecodeToken();
  const decodedToken = this.DecodeToken();

  this.redirectToDashboard(decodedToken);
  console.log("checking decode token  "+ decodedToken);
  //this._router.navigate(["dashboard"]);
 // this._router.navigate(["user"]);
  this.loggedIn=true;
  console.log("Looged ")

  // this._router.toDashboard();
  
 }
 else 
{
 this.loggedIn=false;
}

this.Name= localStorage.getItem("UserName");
// After successful login
this.successMessage = 'Successfully Logged In';
this.startTimer();

}
startTimer() {
  // Wait for 3 seconds (3000 milliseconds) and then clear the success message
  setTimeout(() => {
    this.successMessage = '';
  }, 3000);
}


DecodeToken() : any
  {
    console.log("indside the decode Token  " + this.token.Message);
  const helper = new JwtHelperService();
  const decodedToken = helper.decodeToken(this.token);
  console.log("this is decode token  "+ decodedToken);
  console.log(decodedToken.Role);
  console.log("Printing the message from token  "+decodedToken.Message)
  localStorage.setItem("Role",decodedToken.Role);
  return decodedToken.Role;
  
  //this.Roles = decodedToken.Role;
  }



  logout()
  {
   this._auth.removeBearerToken();
   localStorage.removeItem("Role");
   localStorage.removeItem("UserName");
    //localStorage.removeItem("token");
    console.log("logout")
    this.loggedIn=false;
    //this._route.toLogin();
    this._router.navigate(["/login"]);
   
  }

  redirectToDashboard(RoleName: string): void {

    if (RoleName === 'Manager' || RoleName === 'Employee'|| RoleName === 'HrTravelAdmin') {

      
      this._router.navigate(['/common']); // Replace '/manager-dashboard' with the actual manager dashboard route
  
    } else if (RoleName === 'Admin') {
  
      this._router.navigate(['/homenav']); // Replace '/dashboard-admin' with the actual admin dashboard route
  
    }
  
  }

}
