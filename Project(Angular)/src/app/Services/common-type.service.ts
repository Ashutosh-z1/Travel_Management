import { Injectable } from '@angular/core';
import { CommonType } from '../Interface/CommonType';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonTypeService {
  constructor(private _http: HttpClient) { }
baseUrl="https://localhost:7044/api/CommonTypeReferences/";

GetRoles()
{
  
  return this._http.get<CommonType[]>(this.baseUrl+"role");
}

GetDepartments()
{
  return this._http.get<CommonType[]>(this.baseUrl+"department");
}

GetFlight()
{
  return this._http.get<CommonType[]>(this.baseUrl+"flight");
}

GetMealType()
{
  return this._http.get<CommonType[]>(this.baseUrl+"mealType");
}

GetMealPreference()
{
  return this._http.get<CommonType[]>(this.baseUrl+"MealPreference");
}

GetCity()
{
  return this._http.get<CommonType[]>(this.baseUrl+"city");
}
GetProject()
{
  return this._http.get<CommonType[]>(this.baseUrl+"project");
}
}
