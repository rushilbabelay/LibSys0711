import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from '../../../LybSys-services/book-service/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-feedback1',
    templateUrl: './feedback1.component.html',
    styleUrls: ['./feedback1.component.css']
})
export class Feedback1Component implements OnInit {

    feedbackForm!: FormGroup;
    msg!: string;
    msg1!: string;
    status!: string;
    errorMsg!: string;
    showDiv: boolean = false;
    userRole: any;
    adminLayout: boolean = false;
    commonLayout: boolean = false;
    constructor(private formBuilder: FormBuilder, private _userService: UserService, private router: Router) {
        this.userRole = sessionStorage.getItem('userRole');
        if (this.userRole == "Customer") {
            this.commonLayout = true;
        }
        else {
            this.adminLayout = true;
        }
    }
    ngOnInit() {
        this.feedbackForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]],
            emailId: ['', [Validators.required, Validators.email]],
            rating: ['', [Validators.required]],
            feedback: ['', [Validators.required, Validators.maxLength(200)]]
        });
    }
    SubmitForm(form: FormGroup) {

        if (this.feedbackForm.valid) {
            this.msg = "FeedBack Successful"
            this.msg1 = ""
            alert(`Thank You ${this.feedbackForm.value.name} for sharing your Feedback !!`);
            // this.router.navigate (['/', 'home']).then (nav => { window.alert ('Home');
            this.ngOnInit();
        }
        else {
            this.msg = ""
            this.msg1 = "Try again Later"
        }
    }
    submitFeedbackForm(form: FormGroup) {
        this._userService.addFeedback(this.feedbackForm.value.name, this.feedbackForm.value.emailId, this.feedbackForm.value.rating, this.feedbackForm.value.feedback).subscribe({
            next: responseLoginStatus => {
                this.status = responseLoginStatus;
                this.showDiv = true;
                if (this.status.toLowerCase() == "feedback added successfully!") {
                    // this.msg = "Feedback Added Successfully";
                    alert(`Thank You ${this.feedbackForm.value.name} for sharing your Feedback !!`);
                    this.ngOnInit();
                }
                else {
                    this.msg1 = "Try Again Later";
                    console.log(this.status);
                }
            },
            error: responseLoginError => {
                this.errorMsg = responseLoginError;
            },
            complete: () => console.log("submitFeedbackForm method executed successfully")
        });
    }
}


