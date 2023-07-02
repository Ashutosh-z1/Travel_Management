import { Component  , OnInit} from '@angular/core';
import { User } from 'src/app/Interface/User';
import { CommonType } from 'src/app/Interface/CommonType';
import { UserWithID } from 'src/app/Interface/UserWithId';
import { RouteService } from 'src/app/Services/route.service';

import { UsersService } from 'src/app/Services/users.service';
import { CommonTypeService } from 'src/app/Services/common-type.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private _userService : UsersService , private _route : RouteService , private _commonService: CommonTypeService) {
   
    // this.EditById();
  
    
   }

   ngOnInit(): void {
    this.GetRole();
    this.GetDepartment();
    
    this.GetManager();
 
   }
   Users: User[]=[];
   user: User = {id : 0,email : "N1ULL", firstName : "NUL1L",middleName : "NU1LL",lastName : "NUL1L",password : "NU1LL",contactNumber : "sadfkj",roleId : 9,departmentId : 10, managerId : null ,createdBy : "NULL", createdDate : new Date, modifiedBy : "N1ULL",modifiedDate : new Date, isActive : true};
   
  Users1:UserWithID[]=[];
  department:CommonType[]=[];
  roles:CommonType[]=[];
  departmetName:string|undefined;
  roleName:string|undefined;
  flag:boolean=false;

    


   editUser(_id:any, _user:UserWithID)
   {
     console.log("Callling");
     // _user.firstName="Edited";
     this._userService.EditUser(_id, _user).subscribe(res=>
       {
         console.log(res);
         this._route.toDashboard();
       })
   }
   //open edit form
   selectedUser: any; 
   showEditForm: boolean = false;
   openEditForm(user: any) {
     this.selectedUser = user; 
     this.showEditForm = true;
   }
   updateUser() {
     
     console.log(this.selectedUser);
     this.selectedUser.roleId=this.roleId;
     this.selectedUser.departmentId=this.departmentId;
     this.selectedUser.managerId=this.managerId;
     this.selectedUser.modifiedDate=new Date;
     this.editUser(this.selectedUser.id, this.selectedUser);
     
   }



   //
   GetRole()
   {
     console.log("get Role");
     this._commonService.GetRoles().subscribe(res =>
     {

        console.log(res)

      

        this.roles = res;

      } );
      console.log(this.roles);
   }
   roleId=10;
   update(e:any){
     this.roleId = e.target.value
   }


   //this is finction for getting role from comon reference
   GetDepartment()
   {
     console.log("get Depatment");
     this._commonService.GetDepartments().subscribe(res =>
     {

        console.log(res)

      

        this.department = res;

      } );
      console.log(this.roles);
   }
   departmentId=15;
   updateDeaprtment(e:any){
     this.departmentId = e.target.value
   }
   //manger
   managers:UserWithID[]=[];
   GetManager()
   {
     console.log("get Role");
     this._userService.GetManager().subscribe(res =>
     {

        console.log(res)

      

        this.managers = res;

      } );
      console.log(this.managers);
   }
   managerId=14;//giving value just to initiallise
   updateManger(e:any){
     // console.log("AAAAAAAAAAAAA");
     // console.log(e.target.value);
     this.managerId = e.target.value
   }

}
