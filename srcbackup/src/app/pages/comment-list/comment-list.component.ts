import { Component,OnInit } from '@angular/core';
import { IFeedback } from 'src/app/libSys-interfaces/feedback';
import { UserService } from 'src/LybSys-services/book-service/user.service';
@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent {
   viewcomments!: IFeedback[] ;
   errMsg!: string;
   constructor(private _userservice: UserService) {}
   ngOnInit(){
    //  this.getCommentDetails();
    this.viewcomments=this._userservice.getCommentDetails();
   }
  //  getCommentDetails() {
  //   this._bookservice.getCommentDetails().subscribe({
  //     next:data => {
  //       this.viewcomments = data;
  //     },
  //     error:responseCommentError => {
  //       this.viewcomments=null;
  //       this.errMsg = responseCommentError;
  //       console.log(this.errMsg);
  //     },
  //     complete:() => console.log ("GetCommentDetails method executed successfully")
  //   });
  //  }
  // fsjhfgsjk

}
