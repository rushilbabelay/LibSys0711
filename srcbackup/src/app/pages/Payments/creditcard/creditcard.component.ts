import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent {
  creditcard!: FormGroup;
  msg!: String;
  msg1!: string;
  userRole: any;
  adminLayout: boolean = false;
  commonLayout: boolean = false;
  constructor(private formBuilder: FormBuilder) { 
    this.userRole = sessionStorage.getItem('userRole');
    if (this.userRole == "Customer") {
      this.commonLayout = true;
    }
    else {
      this.adminLayout = true;
    }
  }
  ngOnInit() {
    this.creditcard = this.formBuilder.group({
      cardNumber:['',[Validators.required,Validators.minLength(16),Validators.maxLength(16),Validators.pattern("[0-9]*")]], 
      nameOnCard:['',[Validators.required,Validators.pattern("[a-zA-Z].*")]],
      // cardType: ['',[Validators.required,Validators.pattern("[a-zA-Z].*")]],
      cvvNumber: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(3),]],
      expiryDate: ['',[Validators.required,checkDate]]
    })
}
SubmitForm(form: FormGroup) {
  if (this.creditcard.valid) {
    this.msg = "Otp link"
    this.msg1=""
    // alert(`Thank You ${this.creditcard.value.firstName}`);
  }
  else {
    this.msg = ""
    this.msg1="Try After Sometime!"
  }
}
}

function checkDate(control: FormControl) {
  var currentDate = new Date();
  var givenDate = new Date(control.value)
  console.log(currentDate);
  console.log(givenDate);
  if (givenDate >= currentDate || givenDate == null) {
    return null
  }
  else {
    return {
      dateError: {
        message: "Enter a date greater than today's date"
      }
    };
  }
}

