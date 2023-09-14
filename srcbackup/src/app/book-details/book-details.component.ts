import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/LybSys-services/book-service/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook } from '../libSys-interfaces/book';

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
    bookData: any;
    autherData: any;
    getAutherId: any;
    getBookId: any;
    searchByBookId!: string;
    books!: IBook[];
    filteredbooks!: IBook[];
    userRole: any;
    adminLayout: boolean = false;
  commonLayout: boolean = false;
    constructor(private service: BookService, private route: ActivatedRoute, private router: Router) {
        this.userRole = sessionStorage.getItem('userRole');
        if (this.userRole == "Customer") {
          this.commonLayout = true;
        }
        else {
          this.adminLayout = true;
        }
    }
    ngOnInit(): void {
        //this.getBookId = this.route.snapshot.paramMap.get('bookId');
        // console.log(this.getBookId);
        // console.log(this.getBookId, '...........getBookId');
        // console.log(this.bookData)

        //this.bookData = this.service.getbooks().filter(obj => obj.bookId === this.getBookId)
        // if (this.getBookId) {
        //     this.bookData = this.service.getbooks().filter((value) => {
        //         // console.warn(bookId + " is the id");
        //         // console.log(value.bookId = this.getBookId);
        //         // console.log(value,"....value");//
        //         // console.log(value.bookId,"....valueid");

        //         return value;
        //         // return value.bookId = this.getBookId;
        //     });
        // console.log(this.bookData,".......bookdata")
        // }


    }
    // ngOnInit():void{
    // this.books=this.service.getbooks();
    // this.filteredbooks = this.books;



    //   this.route.paramMap.subscribe(params=>{
    //     this.getBookId=params.get('bookId');})
    // }
    // getBookById(bookID: string) {


    //   this.searchByBookId = bookID;
    //   if (this.searchByBookId == "0") {
    //     this.filteredbooks = this.books;
    //   }
    //   else {
    //     this.filteredbooks = this.filteredbooks.filter(bok => bok.autherId.toString() == this.searchByBookId);
    //   }
    // }
}
