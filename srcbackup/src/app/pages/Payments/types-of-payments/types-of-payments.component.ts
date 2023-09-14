import { Component } from '@angular/core';

@Component({
  selector: 'app-types-of-payments',
  templateUrl: './types-of-payments.component.html',
  styleUrls: ['./types-of-payments.component.css']
})
export class TypesOfPaymentsComponent {
  userRole: any;
  adminLayout: boolean = false;
  commonLayout: boolean = false;
  constructor() { 
    this.userRole = sessionStorage.getItem('userRole');
    if (this.userRole == "Customer") {
      this.commonLayout = true;
    }
    else {
      this.adminLayout = true;
    }
  }
}
