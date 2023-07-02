import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Request } from '../Interface/request';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private _http : HttpClient,private userservice:UserService) { }

   baseUrl  = "https://localhost:7044/api/Requests/" ;

   GetRequests()
   {
      return this._http.get<Request[]>(this.baseUrl) ;
   }

   AddRequest(req : Request)
   {
    console.log(req)
     return this._http.post<Request>(this.baseUrl, 
       JSON.stringify(req), {
         headers: new HttpHeaders({
           'Content-Type': 'application/json',
           'Accept': 'application/json'
         })
       }
     )
    } 
     
 
     GetRequestById(id : number)
  {
    return this._http.get<Request>(this.baseUrl + id)
  }

  DeleteRequestById(id : number)
  {
    console.log("delete service is called...." +id)
    return this._http.delete<any>(this.baseUrl + id)
  }
  GetRequestsByUserId(id : number)
  {
    return this.userservice.GetUserRequests(id);
  }

  GetRequestsByManagerId(id : number)
  {
    return this.userservice.GetManagerRequests(id);
  }

  

}
