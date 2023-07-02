import { Component , OnInit} from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { RouteService } from 'src/app/Services/route.service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-common-dashboard',
  templateUrl: './common-dashboard.component.html',
  styleUrls: ['./common-dashboard.component.css']
})
export class CommonDashboardComponent implements OnInit {

  constructor(private _auth : AuthenticationService , private _router : Router) {
  }

  loggedIn = false;
token:any;
Name : any ;
RoleName : any;
successMessage: string = '';
ngOnInit(): void {
  
  
  console.log("init")
  this.token = this._auth.getBearerToken();
// this.token= localStorage.getItem("token");
 console.log("aaA  "+ this.token)
 if(this.token!=null)
 {
  this.loggedIn=true;
  console.log("Looged ")
 
 }
 else 
{
 this.loggedIn=false;
}


this.Name = localStorage.getItem("UserName");
console.log(this.Name);
this.RoleName = localStorage.getItem("Role");
this.successMessage = 'Successfully Logged In';
this.startTimer();
}
startTimer() {
  // Wait for 3 seconds (3000 milliseconds) and then clear the success message
  setTimeout(() => {
    this.successMessage = '';
  }, 3000);
}

  logout()
  {
   this._auth.removeBearerToken();
    //localStorage.removeItem("token");
    console.log("logout")
    this.loggedIn=false;
    localStorage.removeItem("UserName");
    localStorage.removeItem("Role");
    //this._route.toLogin();
    this._router.navigate(["/login"]);
   
  }

  

}
