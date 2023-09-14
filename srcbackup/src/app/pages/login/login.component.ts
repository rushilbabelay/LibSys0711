import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../LybSys-services/book-service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  msg!: string
  msg1!: string
  status!: string;
  errorMsg!: string;
  //msg: string;
  showDiv: boolean = false;
  constructor(private formBuilder: FormBuilder, private _userService: UserService,private router:Router) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  //SubmitForm(form: FormGroup) {

  //  if (this.loginForm.valid) {

  //    this.msg = "Login Successfully"

  //    this.msg1 = ""

  //    alert(`Thank You ${this.loginForm.value.userName} `);

  //  }

  //  else {

  //    this.msg = ""

  //    this.msg1 = "Try After Sometime!"

  //  }

  //}


  submitLoginForm(form: FormGroup) {
    this._userService.validateCredentials(this.loginForm.value.userName, this.loginForm.value.password).subscribe({
      next: responseLoginStatus => {
        this.status = responseLoginStatus;
        this.showDiv = true;
        console.log(this.status);
        if (this.status.toLowerCase() != "invalid credentials") {   //invalid credentials
          this.msg = "Login Successful";
          sessionStorage.setItem('userName', this.loginForm.value.userName);
          sessionStorage.setItem('userRole', this.status);
          this.router.navigate(['/home']);
          console.log(this.loginForm.value.userName);
          console.log(this.loginForm.value.password);

        }
        else {
          this.msg = this.status + ". Try again with valid credentials.";
        }
      },
      error: responseLoginError => {
        this.errorMsg = responseLoginError;
      },
      complete: () => console.log("SubmitLoginForm method executed successfully")
    });
  }
}


