import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/LybSys-services/book-service/book.service';
import { IBook } from 'src/app/libSys-interfaces/book';
import { ActivatedRoute, Router } from '@angular/router';


BookService
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    books!: IBook[];
    authors: any;
    userRole: any;
    adminLayout: boolean = false;
  commonLayout: boolean = false;
  constructor(private _bookservice: BookService, private route: ActivatedRoute, private router: Router) {
    this.userRole = sessionStorage.getItem('userRole');
        if (this.userRole == "Customer") {
          this.commonLayout = true;
        }
        else {
          this.adminLayout = true;
        }
    }
    ngOnInit() {
      this.books = this._bookservice.getBooks();
      this.authors = this._bookservice.getbookAuthors();
      //this.getbooks();
      //this.getBookAuthors();
    }

  //  getbooks() {
  //    this._bookservice.getbooks().subscribe({
  //    next: books => this.books = books,
  //  })
  //}
  //getBookAuthors() {
  //  this._bookservice.getBookAuthors().subscribe({
  //    next: authors => this.authors = authors,
  //  })
  //}
}
