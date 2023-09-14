import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  forgotPasswordForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router) { }
  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group({
      emailId: ['',[Validators.required,Validators.email,Validators.pattern
        ('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[com]{2,4}$')]],
        question:['',Validators.required],
        answer:['',Validators.required]
    });
}
  submit(){
    this.router.navigate(['/resetPassword']);

  }
}
