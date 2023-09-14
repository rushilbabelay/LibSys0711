import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from 'src/LybSys-services/book-service/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  addbookForm!: FormGroup;
  msg!: string
  msg1!:string
  status!: string;
    errorMsg!: string;
    showDiv: boolean = false;
  constructor(private formBuilder: FormBuilder,private _bookService: BookService) { }
  ngOnInit() {
    this.addbookForm = this.formBuilder.group({
      Bookid: ['',Validators.required], 
      bookName: ['',Validators.required],
      authorId: ['',Validators.required], 
      quantity: ['',Validators.required],
      price: ['',Validators.required],
      
      
    });
  }

  SubmitForm(form: FormGroup) {

    if (this.addbookForm.valid) {

      this.msg = "New book added Successfully"

      this.msg1 = ""

      

      alert(` book added successfully! `);

    }

    else {

      this.msg = ""

      this.msg1 = "Try After Sometime!"

    }

  }
  submitAddBook(form: FormGroup) {
    this._bookService.addBook( this.addbookForm.value.bookName, this.addbookForm.value.quantity, this.addbookForm.value.price).subscribe({
        next: responseLoginStatus => {
            this.status = responseLoginStatus;
            this.showDiv = true;
            if (this.status.toLowerCase() == "Book added") {
                this.msg = "Book Added Successfully";
            }
            else {
                this.msg1 = "Book Not Added";
            }
        },
        error: responseLoginError => {
            this.errorMsg = responseLoginError;
        },
        complete: () => console.log("AddBook method executed successfully")
    });
}


}
