import { Component , OnInit} from '@angular/core';
import { AuthenticationService } from '../Services/authentication.service';
import { Credential } from '../Interface/Credential';
import { JwtHelperService } from "@auth0/angular-jwt";
import { RouteService } from '../Services/route.service';
import { Router } from '@angular/router';
// import { Token } from '@angular/compiler';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{


constructor(private _auth : AuthenticationService , private _router : Router) {}  

unsuccessMessage: string = '';
credential : Credential = {Email:0, Password:0};








redirectToDashboard(regForm: any, RoleName: string): void {

  if (RoleName === 'Manager') {

    this._router.navigate(['/**']); // Replace '/manager-dashboard' with the actual manager dashboard route

  } else if (RoleName === 'Admin') {

    this._router.navigate(['/homenav']); // Replace '/dashboard-admin' with the actual admin dashboard route

  }

}




// Login(regForm: any): void {

//   this.credential = {

//     Email: regForm.controls.email.value,

//     Password: regForm.controls.password.value

//   };




//   this.authService.Authenticate(this.credential).subscribe((res: any) => {

//     this.authService.setBearerToken(res.token);

//     const decodedToken = this.DecodeToken();

//     this.redirectToDashboard(regForm, decodedToken.rolename);

//   });




//   console.log(regForm.value);

// }




// logout(): void {

//   this.authService.logout();

//   this.router.navigate(['/login']); // Replace '/login' with the actual login page route




// }




DecodeToken(): any {

  const helper = new JwtHelperService();

  const token: any = this._auth.getBearerToken();

  const decodedToken = helper.decodeToken(token);

  console.log(decodedToken);

  console.log(decodedToken.RoleName);

 

}
//Roles : any;

  ngOnInit(): void {
    

    
    
  }
  startTimer() {
    // Wait for 3 seconds (3000 milliseconds) and then clear the success message
    setTimeout(() => {
      this.unsuccessMessage = '';
    }, 3000);
  }
  
  Login(regForm:any)
  {
    
    this.credential = {Email:regForm.controls.txtName.value, Password:regForm.controls.passname.value};

     this._auth.Authenticate(this.credential).subscribe((res : any)=>
      {
     
      token : String;
      console.log(res.token);
      console.log(res.message);
      console.log(res.name);

      
      localStorage.setItem("UserName", res.name);
    //     this._auth.setBearerToken(res.token);

    // const decodedToken = this.DecodeToken();

    //    this.redirectToDashboard(regForm, decodedToken.RoleName);

    
     this._router.navigate(["homenav"]);
      //this._router.navigate(["user"]);
     // this._auth.setBearerToken(res);
      //this.token=  localStorage.getItem('bearerToken')
    
      //console.log("T" +  JSON.stringify(this.token));
      // console.log("role" + JSON.stringify(role))
      //const helper = new JwtHelperService()
       
      //this.token = JSON.stringify(this.token)
      //  console.log("In string" + this._auth.getBearerToken().split('.')[0]);
      // this.token = JSON.parse(this.token.split(',')[1]);
      //const decodedToken = helper.decodeToken(this.token.split('.')); 
      

      localStorage.setItem("bearerToken", res.token);
  },error =>{
    if(error.status == 401 || error.status == 500 )
    {
      this.unsuccessMessage = 'Incorrect Email and Password';
    
      this.startTimer();
    }

    
  })
    console.log("inside Authenticate ");
    
    // let isMatch = false;
    // const payload = JSON.parse(window.atob(localStorage.getItem('authToken').split('.')[1]));
    // const userRole = payload.role;

  //this._route.toDashboard();
  //this.DecodeToken();


  }


  // DecodeToken() : any
  // {
  // const helper = new JwtHelperService();
  // console.log("Please  "+localStorage.getItem("bearerToken"));
  // console.log(this._auth.getBearerToken());
  // const token : any= localStorage.getItem("bearerToken");
  // // const token : any = this._auth.getBearerToken();
  // console.log("TOKEN IN DEC   " + token)
  // const decodedToken = helper.decodeToken(token);
  // console.log(decodedToken);
  // console.log(decodedToken.rolename);

  // //this.Roles = decodedToken.Role;
  // }



  // Register(regForm:any)
  // {

  //   // this.credential = {Email:'regForm.controls.txtName.value', Password:'regForm.controls.passname.value'}; 
  //   // console.log(this.credential);
  //   // console.log(regForm)
  //   // console.log(regForm.value)
  //   // console.log(regForm.controls.txtName.value)
  // }


}
