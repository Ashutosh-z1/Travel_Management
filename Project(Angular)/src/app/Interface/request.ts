export class Request{

    requestId : number;
    userId    : number;
    projectId  : number;
    documentId : number;
    reasonForTraveling : string;
    managerId : number;
    createdBy : string;
    createdDate : any;
    modifiedBy : string | null;
    modifiedDate : any ;
    isActive : boolean | null;
    status : number;
    AadharNumber:string;

    constructor()
    {
        this.requestId=0;
        this.userId=0;
        this.projectId = 0 ;
        this.managerId = 0;
        this.documentId=0;
        this.reasonForTraveling="";
        this.status=0;
        this.AadharNumber="";
        this.createdDate="";
        this.modifiedDate="";
        this.createdBy="";
        this.modifiedBy="";
        this.isActive=false;
      
    }


}