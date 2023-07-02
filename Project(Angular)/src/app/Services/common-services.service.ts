import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Common } from '../Interface/Common';
import { Roles } from '../Interface/Roles';
import { Flight } from '../Interface/Flight';
import { MealPreference } from '../Interface/MealPreference';
import { NoOfMeals } from '../Interface/NoOfMeals';

@Injectable({
  providedIn: 'root'
})
export class CommonServicesService {

  constructor(private _http : HttpClient) { }

  baseUrl="https://localhost:7044/api/CommonTypeReferences";

  GetRoles() : Observable<Roles[]>
  {
    return this._http.get<Roles[]>(this.baseUrl + "/role") ;
  }

  GetCommon() : Observable<Common[]>
  {
    return this._http.get<Common[]>(this.baseUrl);
  }

  AddCommon(req : Common)
  {
    console.log("in ser  " + JSON.stringify(req))
    console.log("Request Addded....")
    return this._http.post<Common>(this.baseUrl,
      JSON.stringify(req),{
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })

      }) }
      GetFlight():Observable<Flight[]>

      {
    
        return this._http.get<Flight[]>(this.baseUrl + "flight") ;
    
      }
      GetMealPreference():Observable<MealPreference[]>
      {
        console.log("xxx")
        return this._http.get<MealPreference[]>(this.baseUrl + "/mealPreference") ;
    
      }
      GetNoOfMeals():Observable<NoOfMeals[]>{
        return this._http.get<NoOfMeals[]>(this.baseUrl+"/NoOfMeals");
      }
}
