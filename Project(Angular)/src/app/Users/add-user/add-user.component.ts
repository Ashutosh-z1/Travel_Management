import { Component  , OnInit} from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';
import { User } from 'src/app/Interface/User';
import { RouteService } from 'src/app/Services/route.service';
import { CommonType } from 'src/app/Interface/CommonType';
import { CommonTypeService } from 'src/app/Services/common-type.service';
import { UserWithID } from 'src/app/Interface/UserWithId';
import { Route } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  roles:CommonType[]=[];

  projectField : boolean = false;
  role:string[]=[];
  department:CommonType[]=[];
  ngOnInit() {
  
    this.GetRole();
    this.GetDepartment();
    this.GetManager();
    console.log(this.roles);
  }
  
  constructor(private _userService : UsersService, private _commonService: CommonTypeService , private _route : RouteService) {
   
    // this.EditById();
    
   }
   Users: User[]=[];
   user: User = {id :0 , email : "N1ULL", firstName : "NUL1L",middleName : "NU1LL",lastName : "NUL1L",password : "NU1LL",contactNumber : "sadfkj",roleId : 9,departmentId : 10, managerId : null ,createdBy : "NULL", createdDate : new Date, modifiedBy : "N1ULL",modifiedDate : new Date, isActive : true};
   AddUser(user: User)
    {
      
    console.log("here");
    this._userService.AddUser(user).subscribe(res=>
      {
        console.log("this is "+ res);
        this._route.toDashboard();
      })
    }

    
    Register(regForm:any)
    {
      //console.log(regForm)
      console.log("Rseg check");
      // console.log(regForm);
      console.log("sajdf"+this.roleId);
      // console.log(regForm.controls.managerId.value)
      console.log(regForm.controls.email.value);
        //firstName:string;
        console.log(this.roles);
        this.user.email = regForm.controls.email.value;
        this.user.firstName = regForm.controls.firstName.value;
        this.user.middleName = regForm.controls.middleName.value;
        this.user.lastName = regForm.controls.lastName.value;
        this.user.password = regForm.controls.password.value;
        this.user.contactNumber = regForm.controls.contactNumber.value;
        // console.log(regForm.controls.roleId.value);
        
        // this.user.roleId = regForm.controls.roleId.value;
        // this.user.departmentId = regForm.controls.departmentId.value;
        this.user.roleId = this.roleId;
        this.user.departmentId = this.departmentId;
        // this.user.managerId = regForm.controls.managerId.value;
        if(this.managerId==999999999){
          this.user.managerId = null;
        }
        else 
        {
          this.user.managerId = this.managerId;
        }
        // this.user.createdBy = regForm.controls.createdBy.value;
        // this.user.createdDate = regForm.controls.createdDate.value;
        this.user.createdDate = new Date;
        this.user.modifiedBy = null;
        this.user.modifiedDate = null;
        this.user.isActive = true;
        console.log("sakjdf");
        this.AddUser(this.user);
      //console.log(regForm.controls.txtName.value)
    }
    _commonType: CommonType|undefined;
    
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

    //this is function for getting manager
    managers: UserWithID[]=[];
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
    managerId=999999999;//giving value just to initiallise
    updateManger(e:any){
     
      this.managerId = e.target.value
    }

}
