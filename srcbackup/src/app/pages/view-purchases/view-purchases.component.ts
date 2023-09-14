import { Component } from '@angular/core';
import { IPurchase } from 'src/app/libSys-interfaces/Purchases';
import { UserService } from 'src/LybSys-services/book-service/user.service';
import { BookService } from '../../../LybSys-services/book-service/book.service';
@Component({
  selector: 'app-view-purchases',
  templateUrl: './view-purchases.component.html',
  styleUrls: ['./view-purchases.component.css']
})
export class ViewPurchasesComponent {
  viewpurchase!: IPurchase[] | null;
  books!: IPurchase[];
  errMsg!: string;
  userRole: any;
  adminLayout: boolean = false;
  commonLayout: boolean = false;
  showMsgDiv: boolean = false;
  constructor(private _userservice: BookService) { 
    this.userRole = sessionStorage.getItem('userRole');
    if (this.userRole == "Customer") {
      this.commonLayout = true;
    }
    else {
      this.adminLayout = true;
    }
  }
  ngOnInit() {
    this.getPurchaseDetails();   
    if(this.books==null){
      this.showMsgDiv=true;
    }
    
  }
 
  getPurchaseDetails() {
    this._userservice.getPurchaseDetails().subscribe({
      next:data => {
      this.viewpurchase = data;
      this.showMsgDiv=false;
    },
      error:responseProductError => {
        this.viewpurchase = null;
        this.errMsg = responseProductError;
        console.log(this.errMsg);
      },
      complete:() => console.log("GetPurchaseDetails method executed successfully")
    });
  }

}
