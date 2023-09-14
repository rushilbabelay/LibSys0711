import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
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
