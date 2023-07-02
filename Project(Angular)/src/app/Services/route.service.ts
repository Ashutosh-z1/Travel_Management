import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private _router : Router) { }

  toLogin(){
    // this method should allow navigation to login component
    this._router.navigate(["login"]);
  }

  toDashboard(){
    // this method should allow navigation to dashboard component
    this._router.navigate(["homenav"]);
  }
}
