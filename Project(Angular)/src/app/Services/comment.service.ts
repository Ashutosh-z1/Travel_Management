import { Injectable } from '@angular/core';
import { Comment } from '../Interface/comment';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { CommentWithoutId } from '../Interface/CommentWithoutId';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private _http : HttpClient) { }
  baseUrl = 'https://localhost:7044/api/Comments/';
  private comments: Comment[] = [];

  getAllComments() {
    // return this.comments;
    console.log("inside");
    console.log(this._http.get<Comment>(this.baseUrl));
    console.log("inside");
    return this._http.get<Comment[]>(this.baseUrl);
    
  }

  getCommentById(id: number): Comment | undefined {
    return this.comments.find(comment => comment.id === id);
  }

  createComment(comment: CommentWithoutId) {
    console.log("comment");
    // this.comments.push(comment);
    return this._http.post<CommentWithoutId>(this.baseUrl,

     

      JSON.stringify(comment), {

        headers: new HttpHeaders({

          'Content-Type': 'application/json',

          'Accept': 'application/json'

        })

      }

    )

    console.log('jdsfa');
  }

  updateComment(comment: Comment): void {
    const index = this.comments.findIndex(c => c.id === comment.id);
    if (index !== -1) {
      this.comments[index] = comment;
    }
  }


}
