import { Component } from '@angular/core';
import { User } from 'src/app/Interface/User';
import { UsersService } from 'src/app/Services/users.service';
import { UserWithID } from 'src/app/Interface/UserWithId';
import { Route, Router } from '@angular/router';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { RouteService } from 'src/app/Services/route.service';
import { CommonTypeService } from 'src/app/Services/common-type.service';
import { CommonType } from 'src/app/Interface/CommonType';


@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent {

  constructor(private _userService : UsersService , private _route : Router , private  _r : RouteService , private _commonService:CommonTypeService) {    
   }
   
   ngOnInit() {
    this.GetRole();
    this.GetDepartment();
    this.GetUsers();
    this.GetManager();

  }
  searchText = '';
   Users: User[]=[]; 
   Users1:UserWithID[]=[];
   department:CommonType[]=[];
   roles:CommonType[]=[];
   departmetName:string|undefined;
   roleName:string|undefined;
   flag:boolean=false;
   currentPage = 1;
  pageSize = 10;
  totalPages = 1;
  
  requests: User[] = [];
  pagedRequests: User[] = [];
   GetUsers()
    {
      this._userService.GetUsers().subscribe(res=>
        {
        console.log("skdf"+res)
        this.Users1= res;
    
      }); 
      console.log("print");
      console.log(this.Users1);
    }

 
deleteUser(id:any)
{
        this._userService.DeleteUser(id).subscribe(res=>
        console.log(res))
          this._r.toDashboard();
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


    editUser(_id:any, _user:UserWithID)
    {
      console.log("Callling");
      // _user.firstName="Edited";
      this._userService.EditUser(_id, _user).subscribe(res=>
        {
          console.log(res);
          this._r.toDashboard();
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
       
       filterRequests() {
        const filteredRequests = this.Users1.filter(request =>
          request.firstName.toLowerCase().includes(this.searchText.toLowerCase())
        );
    
        this.totalPages = Math.ceil(filteredRequests.length / this.pageSize);
        this.currentPage = 1;
        this.updatePagedRequests(filteredRequests);
      }
    
      updatePagedRequests(filteredRequests: User[]) {
        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        this.pagedRequests = filteredRequests.slice(startIndex, endIndex);
      }
    


}
