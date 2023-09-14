import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
// import { ICart } from 'src/app/libSys-interfaces/cart';
import { IPurchase } from 'src/app/libSys-interfaces/Purchases';
import { catchError, first, tap, throwError } from 'rxjs';
import { IUser } from '../../app/libSys-interfaces/user';
import { IFeedback } from '../../app/libSys-interfaces/feedback';
import { IAuthor } from '../../app/libSys-interfaces/author';
const AUTH_API = 'https://localhost:44349/api/Common/';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
    providedIn: 'root'
})


export class UserService {
    date: Date = new Date();
    date1: Date = new Date("03-01-2022");
    date2: Date = new Date("12-06-2019");
    date3: Date = new Date("04-04-2022");
    date4: Date = new Date("03-07-2020");
    date5: Date = new Date("02-09-2020");
    date6: Date = new Date("09-10-2021");
    comments!: IFeedback[];
    purchases!: IPurchase[];
    constructor(private http: HttpClient) { }



    validateCredentials(id: string, password: string): Observable<string> {
        var userObj: IUser;
        userObj = { firstname: null, lastname: null, emailId: id, userPassword: password, mobileno: null, gender: null, dateOfBirth: null, housenumber: null, housename: null, street: null, pincode: null, city: null, state: null, country: null };
        return this.http.post<string>('https://localhost:44349/api/Common/ValidateLogin', userObj).pipe(catchError(this.errorHandler));
    }


    //validateCredentialss(id: string, password: string): Observable<string> {
    //  //let newPath = this.apiUrl + "cars/getbyselected?brandId=" + brandId + "&colorId=" + colorId;
    //  return this.http.post<string>('https://localhost:44349/api/Common/ValidateLogin?emailId=' + id + "&userPassword=" + password).pipe(catchError(this.errorHandler));

    //}
    getCommentDetails() {
        this.comments = [
            { "Name": "Shanmukha Srikant", "EmailId": "shanmukha@gmail.com", "Rating": "Excellent", "Suggestions": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, totam." },
            { "Name": "Kartik Agarwal", "EmailId": "kartik.hgxsh@gmail.com", "Rating": "Good", "Suggestions": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tempora earum illo saepe dolorem tenetur quia ipsa labore consectetur recusandae." },
            { "Name": "Gopal Das", "EmailId": "Gopal72@gmail.com", "Rating": "Bad", "Suggestions": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, totam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, totam." },
            { "Name": "Pradeep Kumar", "EmailId": "Pradeepqiw@gmail.com", "Rating": "Not GOOD", "Suggestions": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, totam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, totam." },
        ]
        return this.comments;
    }


    getPurchaseDetails(): Observable<IPurchase[]> {
        let tempVar = this.http.get<IPurchase[]>('https://localhost:44349/api/Customer/GetPurchases').pipe(catchError(this.errorHandler));
        return tempVar;

    }
    // getCommentDetails(): Observable<IFeedback[]>{
    //   let tempVar = this.http.get<IFeedback[]>('PASTE THE LINK PLEASE').pipe(catchError(this.errorHandler));
    //   return tempVar;
    // }

    addFeedback(Name: string, EmailId: string, Rating: string, Suggestions: string): Observable<string> {
        var userObj: IFeedback;
        userObj = { Name: Name, EmailId: EmailId, Rating: Rating, Suggestions: Suggestions };
        return this.http.post<string>('https://localhost:44349/api/Customer/addFeedback', userObj).pipe(catchError(this.errorHandler));
    }

    addAuthor(authorName: string): Observable<string> {
        var userObj: IAuthor;
        userObj = { authorId: null, authorName: authorName, authorImg: null };
        return this.http.post<string>('https://localhost:44349/api/Admin/addAuthor', userObj).pipe(catchError(this.errorHandler))
    }
    registerUser(firstname: string, lastname: string, EmailId: string, userPassword: string, mobileno: bigint, gender: string, dateOfBirth: Date, housenumber: string, housename: string, street: string, pincode: bigint, city: string, state: string, country: string): Observable<string> {
        var userObj: IUser;
        userObj = { firstname: firstname, lastname: lastname, emailId: EmailId, userPassword: userPassword, mobileno: mobileno, gender: gender, dateOfBirth: dateOfBirth, housenumber: housenumber, housename: housename, street: street, pincode: pincode, city: city, state: state, country: country };
        return this.http.post<string>('https://localhost:44349/api/Common/RegisterUserUsingUsp', userObj).pipe(catchError(this.errorHandler));
    }

    updateAuthor(authorId: number, authorName: string): Observable<boolean> {
        var Obj: IAuthor;
        Obj = { authorId: authorId, authorName: authorName, authorImg: null };
        return this.http.put<boolean>('https://localhost:44349/api/Admin/UpdateAuthor', Obj).pipe(catchError(this.errorHandler));
    }


    errorHandler(error: HttpErrorResponse) {
        console.error(error);
        return throwError(() => new Error(error.message || "Server Error"));
    }
}

