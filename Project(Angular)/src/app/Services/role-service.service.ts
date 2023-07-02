import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Role } from '../Interface/Role';

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {

  constructor(private _http : HttpClient) { }

  baseUrl="http://localhost:5281/api/Roles/";

 

  GetRoles()

  {

    return this._http.get<Role[]>(this.baseUrl);

  }




  AddRole(role : Role)  

  {

    console.log(this.baseUrl)

    console.log("inside service" + role)

    return this._http.post<Role>(this.baseUrl,

      JSON.stringify(role), {

        headers: new HttpHeaders({

          'Content-Type': 'application/json',

          'Accept': 'application/json'

        })

      }

    )}





}
