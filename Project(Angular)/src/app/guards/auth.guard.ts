import { CanActivateFn, RouteReuseStrategy, Router } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';
import { inject } from '@angular/core';
import { RouteService } from '../Services/route.service';
import {catchError, map, of, pipe} from 'rxjs'
  

export const authGuard: CanActivateFn = (route, state) => {
  var authService = inject(AuthenticationService);
  var _router = inject(RouteService)
  
  if(localStorage.getItem('bearerToken')!=null)
  {
    // _router.toDashboard();
     return true;
  }
     else 
     {
    // _router.toLogin();
     return false;
     }
        //  return true;
         map(() => true),
         catchError(() => {
            _router.toLogin();
         //router.navigate(['/login']);
         return of(false);
})
 
};
