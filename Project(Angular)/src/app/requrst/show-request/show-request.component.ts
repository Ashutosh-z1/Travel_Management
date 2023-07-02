import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestViewModel } from 'src/app/Interface/RequestViewModel';
import { CommentWithoutId } from 'src/app/Interface/CommentWithoutId';
import { Comment } from 'src/app/Interface/comment';
import { CommentService } from 'src/app/Services/comment.service';


@Component({
  selector: 'app-show-request',
  templateUrl: './show-request.component.html',
  styleUrls: ['./show-request.component.css']
})
export class ShowRequestComponent implements OnInit {

  requests: RequestViewModel[] = [];
  pagedRequests: RequestViewModel[] = [];
  currentPage = 1;
  pageSize = 10;
  totalPages = 1;
  searchText = '';

  constructor(private http: HttpClient , private commentService: CommentService) { }

  ngOnInit() {
    this.fetchRequests();
    this.getrequestdata();
  }

  fetchRequests() {
    this.http.get<RequestViewModel[]>('https://localhost:7044/api/requestViews').subscribe(
      (data: RequestViewModel[]) => {
        this.requests = data;
        console.log(data);
        this.filterRequests();
      },
      (error) => {
        console.error('Error fetching requests:', error);
      }
    );
  }

  filterRequests() {
    const filteredRequests = this.requests.filter(request =>
      request.userFirstName.toLowerCase().includes(this.searchText.toLowerCase())
    );

    this.totalPages = Math.ceil(filteredRequests.length / this.pageSize);
    this.currentPage = 1;
    this.updatePagedRequests(filteredRequests);
  }

  updatePagedRequests(filteredRequests: RequestViewModel[]) {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedRequests = filteredRequests.slice(startIndex, endIndex);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagedRequests(this.requests);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagedRequests(this.requests);
    }
  }

  Value : boolean = false;
  // TypeScript functions to control the popup
 openPopup() {
  const popup = document.getElementById('popup');
  this.Value= true;
  if (popup) {
    popup.style.display = 'flex';
  }
  this.closePopup()
}

closePopup() {
  const popup = document.getElementById('popup');
  if (popup) {
    popup.style.display = 'none';
  }
}

 
_cmt_add: CommentWithoutId ={
  commentName: "string" ,
  requestId: 2,
  createdBy : "string",
  createdDate: new Date ,
  modifiedBy : "string",
  modefiedDate : new Date ,
  isActive : true
}
createComment1(regForm:any) {
    
  this._cmt_add.commentName=regForm.controls.commentName.value;
  this._cmt_add.requestId= 2 ;
  // console.log("hitting");
  // console.log(this._cmt_add);
  // _cmt_add: Comment| undefined;
  console.log("111111111111");
  this.commentService.createComment(this._cmt_add).subscribe(res=>{
    console.log(res);
  });
  // this.newComment = new commentModel.Comment();
}

requestId :any ;

getrequestdata()
{
  //this.requestId = this.requests(x => x.requestID);

  console.log(this.requestId )
}
  

}
