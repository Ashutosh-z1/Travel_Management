import { Component } from '@angular/core';
import { Router , NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';

  isUserLoggedIn : boolean  = false;
  constructor( private _router : Router) {  
    
    this._router.events.subscribe((event) => {
      if(event instanceof NavigationEnd)
      {
        this.checkUserLoggedIn();
      }
    });
  }



  checkUserLoggedIn()
  {
    this.isUserLoggedIn = true;
  }

  ishomenavVisible() :boolean{

    return this.isUserLoggedIn && this._router.url !== '/login';
  }

}
