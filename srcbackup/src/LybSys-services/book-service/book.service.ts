import { Injectable } from '@angular/core';
import { IBook } from 'src/app/libSys-interfaces/book';
import { IAuthor } from 'src/app/libSys-interfaces/author';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { IPurchase } from '../../app/libSys-interfaces/Purchases';
import { IAddBook } from 'src/app/libSys-interfaces/addBook';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    books!: IBook[];
    author!: IAuthor[];
    constructor(private http: HttpClient) { }
    getBooks() {
        this.books = [{
            "bookId": "B101", "bookName": "The Ministry of Utmost Happiness", "authorId": 1, "price": 180.00,
            "quantityAvailable": 10, 'bookImg': "assets/libSys-images/12.jpg"
        },
        {
            "bookId": "B102", "bookName": "The god of small things", "authorId": 1, "price": 1339.00,
            "quantityAvailable": 20, 'bookImg': "assets/libSys-images/12.webp"
        },
        {
            "bookId": "B103", "bookName": "The Algebra of Infinite Justice", "authorId": 1, "price": 1689.00,
            "quantityAvailable": 10, 'bookImg': "assets/libSys-images/13.jpg"
        },
        {
            "bookId": "B104", "bookName": "The Ordinary Person's Guide to Empire", "authorId": 1, "price": 1700.00,
            "quantityAvailable": 100, 'bookImg': "assets/libSys-images/14.jpg"
        },
        {
            "bookId": "B105", "bookName": "Running There Must Be A Place", "authorId": 4, "price": 700.00,
            "quantityAvailable": 60, 'bookImg': "assets/libSys-images/15.jpg"
        },
        {
            "bookId": "B106", "bookName": "Life on the Run", "authorId": 5, "price": 1290.00,
            "quantityAvailable": 90, 'bookImg': "assets/libSys-images/16.jpg"
        },
        {
            "bookId": "B107", "bookName": "The Hive", "authorId": 6, "price": 300.00,
            "quantityAvailable": 160, 'bookImg': "assets/libSys-images/17.jpg"
        },
        {
            "bookId": "B108", "bookName": "One Indian Girl", "authorId": 7, "price": 500.00,
            "quantityAvailable": 30, 'bookImg': "assets/libSys-images/18.jpg"
        }
        ]
        return this.books;
    }
    getbookAuthors() {
        this.author = [
            { "authorId": 1, "authorName": "Arundhati Roy", "authorImg": "assets/libSys-images/1.jpg" },
            { "authorId": 2, "authorName": "Salman Rushdie", "authorImg": "assets/libSys-images/1.jpg" },
            { "authorId": 3, "authorName": "Jhumpa Lahiri", "authorImg": "assets/libSys-images/1.jpg" },
            { "authorId": 4, "authorName": "Jack Cocker", "authorImg": "assets/libSys-images/1.jpg" },
            { "authorId": 5, "authorName": "Bill Bradley", "authorImg": "assets/libSys-images/1.jpg" },
            { "authorId": 6, "authorName": "Barry Lyga, Morgan Baden", "authorImg": "assets/libSys-images/1.jpg" },
            { "authorId": 7, "authorName": "Chetan Bhagat", "authorImg": "assets/libSys-images/1.jpg" }
        ]
        return this.author;
    }

  
    
  getPurchaseDetails(): Observable<IPurchase[]> {
    let tempVar = this.http.get<IPurchase[]>('https://localhost:44349/api/Customer/GetPurchases').pipe(catchError(this.errorHandler));
    return tempVar;
  }
  getbooks(): Observable<IBook[]> {
    let tempVar = this.http.get<IBook[]>('https://localhost:44349/api/Customer/GetBooks').pipe(catchError(this.errorHandler));
    return tempVar;
  }

  getBookAuthors(): Observable<IAuthor[]> {
    let tempVar = this.http.get<IAuthor[]>('https://localhost:44349/api/Customer/GetAuthors').pipe(catchError(this.errorHandler));
    return tempVar;
  }
  updateAuthor(authorId: number, authorName: string): Observable<boolean> {
    var Obj: IAuthor;
    Obj = { authorId: authorId, authorName: authorName, authorImg:null };
    return this.http.put<boolean>('https://localhost:44349/api/Admin/UpdateAuthor', Obj).pipe(catchError(this.errorHandler));
  }
  addBook(bookName: string,quantityAvailable:number,price:number): Observable<string> {
    var Obj: IAddBook;
    Obj = { bookName: bookName, price: price,quantityAvailable:quantityAvailable };
    return this.http.post<string>('https://localhost:44349/api/Admin/AddBook',Obj).pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(() => new Error(error.message || "Server Error"));
  }

}
