import { Component } from '@angular/core';

@Component({
  selector: 'app-upi',
  templateUrl: './upi.component.html',
  styleUrls: ['./upi.component.css']
})
export class UpiComponent {
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
