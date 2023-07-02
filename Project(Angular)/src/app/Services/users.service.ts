import { Injectable } from '@angular/core';
import { User } from '../Interface/User';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { UserWithID } from '../Interface/UserWithId';
import { CommonType } from '../Interface/CommonType';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private _http : HttpClient) { }
  baseUrl ="https://localhost:7044/api/users/";
  baseUrl2 ="https://localhost:7044/api/commontypereferences/";
  managerUrl = "http://localhost:5006/api/User/managers";
   userRequestsUrl = "http://localhost:5006/api/User/user/requests/";
   managerRequestsUrl = "http://localhost:5006/api/User/manager/requests/";
  GetUsers() 
  {
    // console.log("getUsers");
    // console.log(this._http.get<UserWithID[]>(this.baseUrl));
    console.log("getUsers");
    return this._http.get<UserWithID[]>(this.baseUrl);
  }

  GetUserById(id : number)
  {
    console.log("getuserbyid");
    return this._http.get<User>(this.baseUrl + id)
  }
  user1: UserWithID| undefined;
  DeleteUserBy(id : number)
  {
    console.log(111);
    return this._http.delete<User>(this.baseUrl + id)
  }

  AddUser(user : User)
  {
    console.log(user);
    return this._http.post<User>(this.baseUrl, 
      
      JSON.stringify(user), {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      }
    )
    console.log("hitted");
  } 
  variable1:any;
  EditUser(id:  number, users : User)
  {
    console.log("eddit service");
    this.variable1=users;
    this.variable1.id=id;
    
    return this._http.put<UserWithID>(this.baseUrl + id, this.variable1);
  }
  DeleteUser(id: number)
  {
    return this._http.delete<User>(this.baseUrl + id)
  }
  GetCommon() 
  {
    // console.log("getUsers");
    // console.log(this._http.get<UserWithID[]>(this.baseUrl));
    console.log("getUsers");
    return this._http.get<UserWithID[]>(this.baseUrl);
  }
  GetRoles()
  {
    console.log();
    return this._http.get<CommonType[]>(this.baseUrl2+"role");
  }
  GetManager()
  {
    return this._http.get<UserWithID[]>(this.baseUrl+"manager");
  }

 
}
