import { Component , OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

import { User } from 'src/app/Interface/User';

import { UserWithID } from 'src/app/Interface/UserWithId';
import { Router } from '@angular/router';
import { RouteService } from 'src/app/Services/route.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent  {
/**
 *
 */
constructor(private _userService : UsersService , private _route : RouteService) {
   
}



deleteUser(id:any, user: UserWithID)
{
user.isActive=!(user.isActive);
        this._userService.DeleteUser(id).subscribe(res=>
        console.log(res))
          this._route.toDashboard();
      }

}
