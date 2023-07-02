import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } 
from '@angular/common/http';
import { User } from '../Interface/User';
import { Manager } from '../Interface/Manager';
import { Request } from '../Interface/request';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) {

  }
  baseUrl="http://localhost:5006/api/User/";
  managerUrl = "http://localhost:5006/api/User/managers";
  userRequestsUrl = "http://localhost:5006/api/User/user/requests/";
  managerRequestsUrl = "http://localhost:5006/api/User/manager/requests/";

  GetManagerList()
  {
   console.log("in get manager service")
   return this._http.get<Manager[]>(this.managerUrl);
  }

  GetUsers()
  {
   console.log("in get user service")
   return this._http.get<User[]>(this.baseUrl);
  }
  GetUsersById(id:number)
  {
   return this._http.get<User>(this.baseUrl+id)
  }
  DeleteUserBy(id:number)
  {
   return this._http.delete<User>(this.baseUrl+id)
   
  }
  AddUser(user: User)
  {
   console.log("InService")
   return this._http.post<User>(this.baseUrl,
     JSON.stringify(user),
     {
       headers: new HttpHeaders({
         'Content-Type': 'application/json',
         'Accept': 'application/json'
       })
     })
  }
  EditUser(id:number,user:User)
  {
     return this._http.put<User>(this.baseUrl +id,  JSON.stringify(user),
     {
       headers: new HttpHeaders({
         'Content-Type': 'application/json',
         'Accept': 'application/json'
       })
     })

   }
   GetUserRequests(id:number)
   {
    console.log("in get userrequests service")
    return this._http.get<Request[]>(this.userRequestsUrl+id);
   }

   GetManagerRequests(id:number)
   {
    console.log("in get managerrequests service")
    return this._http.get<Request[]>(this.managerRequestsUrl+id);
   }
}
