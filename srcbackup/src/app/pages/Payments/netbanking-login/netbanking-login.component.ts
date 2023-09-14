import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-netbanking-login',
  templateUrl: './netbanking-login.component.html',
  styleUrls: ['./netbanking-login.component.css']
})
export class NetbankingLoginComponent {
  login!: FormGroup;
  msg!: string;
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
    this.login = this.formBuilder.group({
      loginId:['',[Validators.required]],
      password: ['',[Validators.required]]
    });
  }
  SubmitForm(form: FormGroup) {
   
    if (this.login.valid) {
      this.msg = "Login Successful"
      this.msg1=""
      // alert(`Thank You ${this.login.value.name} for sharing your Feedback !!`);

    }
    else {
      this.msg = ""
      this.msg1="Try again Later"
    }
  }
  
}
