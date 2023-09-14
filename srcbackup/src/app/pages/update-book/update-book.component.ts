import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/LybSys-services/book-service/book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  bookToUpdate={
    bookId: "",
    bookName: "",
    authorId: Number,
    price: Number,
    quantityAvailable:Number,
  };
  
  
    books: any;
    authors:any;
    constructor(private service:BookService,private route:ActivatedRoute,private router:Router)  {
    }
    ngOnInit()
    {
    this.books=this.service.getBooks();
    this.authors=this.service.getbookAuthors();
    }
  
    update(book: { bookId: string; bookName: string; authorId: NumberConstructor; price: NumberConstructor; quantityAvailable: NumberConstructor; }){
      this.bookToUpdate = book;
    }
  

}
