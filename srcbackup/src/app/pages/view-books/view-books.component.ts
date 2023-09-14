import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/libSys-interfaces/book';
import { IAuthor } from 'src/app/libSys-interfaces/author';
import { BookService } from 'src/LybSys-services/book-service/book.service';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
@Component({
    selector: 'app-view-books',
    templateUrl: './view-books.component.html',
    styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {
    books!: IBook[];
    authors!: IAuthor[];
    filteredbooks!: IBook[];
    searchByBookName!: string;
    searchByAuthorId: string = "0";
    imageSrc!: string;
    showMsgDiv: boolean = false;
    errMsg!: string;
    userRole: any;
    adminLayout: boolean = false;
  commonLayout: boolean = false;
    constructor(private _bookservice: BookService) {
        this.userRole = sessionStorage.getItem('userRole');
        if (this.userRole == "Customer") {
          this.commonLayout = true;
        }
        else {
          this.adminLayout = true;
        }
     }


    ngOnInit() {
        this.getbooks();
        this.getBookAuthors();
        // this.books = this._bookservice.getBooks();
        // this.authors = this._bookservice.getbookAuthors();

        if (this.books == null) {
            this.showMsgDiv = true;
        }
        this.filteredbooks = this.books;
        this.imageSrc = 'assets/libSys-images/add-item.jpg';



    }
    //ngOnInit();

    //getbooks() {
    //  this._bookservice.getbooks().subscribe({
    //    next: books => this.books = books,
    //  })
    //}

    //getBookAuthors() {
    //  this._bookservice.getBookAuthors().subscribe({
    //    next: authors => this.authors = authors,
    //  })
    //}

    //next: (v) => console.log(v),
    //error: (e) => console.error(e),
    //complete: () =>
    //  console.info('complete')


    getbooks() {
        this._bookservice.getbooks().subscribe({
            next: data => {
                this.books = data;
                this.filteredbooks = data;
                this.showMsgDiv = false;
            },
            error: error => {
                this.books = [];
                this.errMsg = error;
                console.log(this.errMsg);

            },
            complete: () => console.log("Getbooks method executed successfully")
        });
    }

    getBookAuthors() {
        this._bookservice.getBookAuthors().subscribe({
            next: data => {
                this.authors = data;

            },
            error: error => {
                this.authors = [];
                this.errMsg = error;
                console.log(this.errMsg);
            },
            complete: () => console.log("GetBookAuthors method executed successfully")
        });
    }

    searchBook(bookName: string) {
        if (this.searchByAuthorId == "0") {
            this.filteredbooks = this.books;
        }
        else {
            this.filteredbooks = this.books.filter(prod => prod.authorId.toString() == this.searchByAuthorId);
        }
        if (bookName != null || bookName == "") {
            this.searchByBookName = bookName;
            this.filteredbooks = this.filteredbooks.filter(prod => prod.bookName.toLowerCase().indexOf(bookName.toLowerCase()) >= 0);
        }
        if (this.filteredbooks.length == 0) {
            this.showMsgDiv = true;
        }
        else {
            this.showMsgDiv = false;
        }
    }
    searchBookByAuthor(authorId: string) {

        if (this.searchByBookName != null || this.searchByBookName == "") {
            this.filteredbooks = this.books.filter(bok => bok.bookName.toLowerCase().indexOf(this.searchByBookName.toLowerCase()) >= 0);
        }
        else {
            this.filteredbooks = this.books;
        }
        this.searchByAuthorId = authorId;
        if (this.searchByAuthorId == "0") {
            this.filteredbooks = this.books;
        }
        else {
            this.filteredbooks = this.filteredbooks.filter(bok => bok.authorId.toString() == this.searchByAuthorId);
        }
    }
    // searchBookByAuthor(authorId: string) {
    //   this.filteredbooks = this.books;
    //   if (authorId == "0") {
    //     this.filteredbooks = this.books;
    //   }
    //   else {
    //     this.filteredbooks = this.filteredbooks.filter(boo => boo.authorId.toString() == authorId);
    //   }
    // }
}

