import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/LybSys-services/book-service/book.service';
import { IBook } from 'src/app/libSys-interfaces/book';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css']
})

  export class HomeLoginComponent implements OnInit {
    books!: IBook[];
    authors: any;
    userRole: any;
  customerLayout: boolean = false;
  commonLayout: boolean = false;
  constructor(private _bookservice: BookService, private route: ActivatedRoute, private router: Router) {
    this.userRole = sessionStorage.getItem('userRole');
    if (this.userRole == "Customer") {
      this.commonLayout = true;
    }
    else {
      this.customerLayout = true;
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

