import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent {
resetPasswordForm!:FormGroup;
  msg!: string;
  msg1!: string;
constructor(private formBuilder: FormBuilder) { }
mustMatch(controlName:string,matchingControlName:string){
  return(formgroup:FormGroup)=>{
    const control=  formgroup.controls[controlName];
    const matchingControl=  formgroup.controls[matchingControlName];
    if(matchingControl.errors && !matchingControl.errors['mustMatch']){
      return
    }
    if(control.value !==matchingControl.value){
      matchingControl.setErrors({mustMatch:true})
    }
    else{
      matchingControl.setErrors(null)
    }
  }
}
ngOnInit() {
  this.resetPasswordForm = this.formBuilder.group({
    password: ['',[Validators.required,Validators.minLength(6)]],
    confirmpassword: ['',[Validators.required]]

  },
 { validators:this.mustMatch('password','confirmpassword')}
 
  );
}
SubmitForm(form: FormGroup) {

  if (this.resetPasswordForm.valid) {
        alert(`Password Changed Successfully!`);

  }

  else {

        this.msg1 = "Try After Sometime!"

  }

}
}




