import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Credential } from '../Interface/Credential';
import { map } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _http : HttpClient) { }

  BaseUrl = "https://localhost:7044/api/Authentication/";

  Authenticate(credential : Credential)
  {
    console.log(credential)
    return this._http.post<Credential>(this.BaseUrl, 
      JSON.stringify(credential), {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      }
    )}

    isAuthenticated()
    {
      if(localStorage.getItem('bearerToken')!=null)
        {
          
           return true;
        }
           else 
           {
          
           return false;
           }
    }

    setBearerToken(token:any){
      console.log(token)
      // this method should store the authentication token to local storage
      //localStorage.setItem("bearerToken",token);
      localStorage.setItem("bearerToken", token);
    }
    
    getBearerToken(){
      // this method should return the authentication token stored in local storage
      console.log("inside the GETBearerTokrn    " + localStorage.getItem("bearerToken"));
      return localStorage.getItem("bearerToken");
      
    }
  
    removeBearerToken(){
      // this method should clear the token stored in local storage
      localStorage.removeItem("bearerToken")
    }

    getUserRole():string{
      const helper = new JwtHelperService();
    
      const token: any =localStorage.getItem("bearerToken");
      if(token != null){
      const decodeToken= helper.decodeToken(token);
      return decodeToken.rolename
      }
      return "guest";
    }
    
    getUserId():number{
      const helper = new JwtHelperService();
      const token: any =localStorage.getItem("bearerToken");
      const decodeToken= helper.decodeToken(token);
      return decodeToken.Id;
    }
    
    getUserName():string{
      const helper = new JwtHelperService();
      const firstname: any =localStorage.getItem("UserName");
      
      return firstname;
    }

  
}
