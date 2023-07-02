import { Component ,OnInit } from '@angular/core';
import { Request } from 'src/app/Interface/request';
import { RequestService } from 'src/app/Services/request.service';
import { FormBuilder, FormGroup , Validator , NgForm , FormControl } from '@angular/forms';
import { Transport } from 'src/app/Interface/Transport';
import { Hotel } from 'src/app/Interface/Hotel';
import { HotelService } from 'src/app/Services/hotel.service';
import { Common } from 'src/app/Interface/Common';
import { CommonServicesService } from 'src/app/Services/common-services.service';
import { MealPreference } from 'src/app/Interface/MealPreference';
import { HttpClient } from '@angular/common/http';
import { NoOfMeals } from 'src/app/Interface/NoOfMeals';
import { Router } from '@angular/router';
import { TransportService } from 'src/app/Services/transport.service';
import { AuthenticationService } from 'src/app/Services/authentication.service';






@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent  implements OnInit{
  constructor(private _reqService : RequestService, private formBuilder: FormBuilder,private _transportservice : TransportService,private _hotelservice:HotelService ,
    private _commonservice:CommonServicesService, private router:Router,private authservice:AuthenticationService) {}
  mealpreference: MealPreference[]=[];
  noofmeals:NoOfMeals[]=[];
  requestId = 0;

  
  
  selectedBookingType: string = '';
  
  ngForm !: FormGroup;

  ngOnInit() : void{
    this.GetMealPreference();
    this.GetNoOfMeals();
   }
  
  request = new Request();
 
  GetMealPreference(){
    this._commonservice.GetMealPreference().subscribe(
      (res)=>{
        this.mealpreference=res;
      }
    )
  }
  GetNoOfMeals(){
    this._commonservice.GetNoOfMeals().subscribe(
      (res)=>{
        this.noofmeals=res;
      }
    )
  }
 
  AddRequest(form : any){
  this.request={
    requestId:0,
      userId :this.authservice.getUserId(),
      projectId:1003,
      reasonForTraveling:form.controls.reason.value,
      status:9,
      managerId:1006,
      documentId:1,
      AadharNumber:form.controls.adhaar.value,
      createdBy:"Prashant",
      createdDate:Date.now,
      modifiedBy:null,
      modifiedDate:Date.now,
      isActive:true,

      
  }
  this._reqService.AddRequest(this.request).subscribe(res=>
    
    {
     
      console.log(res.requestId);
      console.log(form.value);
      this.requestId=res.requestId;
      console.log(form.controls.bookingType.value);
      if(form.controls.bookingType.value =="Flight"){
      this.AddTransportDetails(form);
      this.router.navigate(["/employee"]);
      }
      else if(form.controls.bookingType.value =="Hotel"){
      this.AddHotelDetails(form);
      this.router.navigate(["/employee"]);
      }
      else{
        this.AddTransportDetails(form);
        this.AddHotelDetails(form);
        this.router.navigate(["/employee"]);
      }

    })

}

transport =new Transport();

AddTransportDetails(form : any){
  console.log(form.value);
  var tflag = false;
  if(form.controls.flightSelection.value=="international"){
tflag = true;
  }

  
  this.transport={

    requestId :this.requestId,
    internationalTrvel:tflag,
    domesticTravel:!tflag,
    travelDateFrom:form.controls.departure.value,
    travelDateTo:form.controls.return.value,
    travelFrom:null,
    travelFromId:form.controls.from.value,
    travelTo:null,
    travelToId:form.controls.to.value,
    visaNumber:form.controls.visaNumber.value,
    passportNumber:form.controls.passportNumber.value,
   // adharCardNo:form.controls.AdhaarCardNumber.value,
    createdBy:"ajay",
    createdDate:Date.now,
    modifiedBy:null,
    modifiedDate:null,
    isActive:true

    
}
this._transportservice.AddTransportDetails(this.transport).subscribe(res=>
  
  {
   
    console.log(res);

  })

}



hotel = new Hotel();
AddHotelDetails(form : any)
{
  this.hotel={
    requestId:this.requestId,
    stayDateFrom:form.controls.stayingFrom.value,
    stayDateTo:form.controls.stayingTill.value,
    mealPreferenceId:form.controls.mealPreference.value,
    noOfMealsId:form.controls.numberOfMeals.value,
    createdBy:"ajay",
    createdDate:Date.now,
    modifiedBy:"aaa",
    modifiedDate:Date.now,
    isActive:true
  }
  this._hotelservice.AddHotelDetails(this.hotel).subscribe(res=>
    
    {
     
      console.log(res);

    })
}

}
