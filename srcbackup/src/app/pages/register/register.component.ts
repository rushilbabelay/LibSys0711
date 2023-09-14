import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../LybSys-services/book-service/user.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm!: FormGroup;
    msg!: string;
    msg1!: string;
    status!: string;
    errorMsg!: string;
    showDiv: boolean = false;
    constructor(private formBuilder: FormBuilder, private _userService: UserService, private router: Router) { }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]],
            lastName: ['', [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]],
            emailId: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[com]{2,4}$')]],
            gender: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            dateOfbirth: ['', [Validators.required, checkDate]],
            houseNumber: ['', [Validators.required]],
            buildingName: ['', [Validators.required]],
            address: ['', [Validators.required]],
            pincode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
            state: ['', [Validators.required]],
            city: ['', [Validators.required]],
            country: ['', [Validators.required]],
            mobileNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^((\\+91-?)|0)?[6-9]{1}[0-9]{9}$")]]
        });
        // pattern("^((\\+91-?)|0)?[0-9]{10}$"
    }

    SubmitForm(form: FormGroup) {
        if (this.registerForm.valid) {
            this.msg = "Signup Successful"
            this.msg1 = ""
            alert(`Thank You ${this.registerForm.value.firstName}`);
        }
        else {
            this.msg = ""
            this.msg1 = "Try After Sometime!"
        }
    }
    onSubmit() {
        this.router.navigate(['/login']);
        alert(`You have Registered Successfully `);
    
      }
    submitRegisterForm(form: FormGroup) {
        this._userService.registerUser(this.registerForm.value.firstName, this.registerForm.value.lastName, this.registerForm.value.emailId, this.registerForm.value.password, this.registerForm.value.mobileNumber, this.registerForm.value.gender, this.registerForm.value.dateOfbirth, this.registerForm.value.houseNumber, this.registerForm.value.buildingName, this.registerForm.value.address, this.registerForm.value.pincode, this.registerForm.value.city, this.registerForm.value.state, this.registerForm.value.country).subscribe({
            next: responseLoginStatus => {
                this.status = responseLoginStatus;
                this.showDiv = true;
                if (this.status.toLowerCase() == "user added") {
                    this.msg = "User Added Successfully";
                }
                else {
                    this.msg1 = "User not Added";
                }
            },
            error: responseLoginError => {
                this.errorMsg = responseLoginError;
            },
            complete: () => console.log("SubmitRegisterForm method executed successfully")
        });
    }
}
function checkDate(control: FormControl) {
    var currentDate = new Date();
    var givenDate = new Date(control.value)
    console.log(currentDate);
    console.log(givenDate);
    if (givenDate <= currentDate || givenDate == null) {
        return null
    }
    else {
        return {
            dateError: {
                message: "Enter a date less than today's date"
            }
        };
    }
}