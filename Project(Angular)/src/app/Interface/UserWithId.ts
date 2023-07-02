export interface UserWithID{
    
      
    id:number;    
    email:string;
    firstName:string;
    middleName:string;
    lastName:string;
    password:string;
    contactNumber:string;
    roleId:number;
    departmentId:number;
    managerId:number |null;
    createdBy:string;
    createdDate:Date;
    modifiedBy:string|null;
    modifiedDate:Date| null;
    isActive:boolean;
    




  
}