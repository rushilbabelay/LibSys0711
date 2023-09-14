import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit 
{
  addbookForm!: FormGroup;
  msg!: string
  msg1!:string
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.addbookForm = this.formBuilder.group({
    
      Authorid: '',
      authorName:'', 
      
      
      
    });
  }

  SubmitForm(form: FormGroup) {

    if (this.addbookForm.valid) {

      this.msg = "Author added Successfully"

      this.msg1 = ""

      

      alert(` Author added successfully! `);

    }

    else {

      this.msg = ""

      this.msg1 = "Try After Sometime!"

    }

  }


}
