import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ViewBooksComponent } from './pages/view-books/view-books.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';
import { Feedback1Component } from './pages/feedback/feedback1.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetpasswordComponent } from './pages/resetpassword/resetpassword.component';
import { ViewPurchasesComponent } from './pages/view-purchases/view-purchases.component';
import { CreditcardComponent } from './pages/Payments/creditcard/creditcard.component';
import { DebitcardComponent } from './pages/Payments/debitcard/debitcard.component';
import { NetbankingComponent } from './pages/Payments/netbanking/netbanking.component';
import { NetbankingLoginComponent } from './pages/Payments/netbanking-login/netbanking-login.component';
import { TypesOfPaymentsComponent } from './pages/Payments/types-of-payments/types-of-payments.component';
import { UpiComponent } from './pages/Payments/upi/upi.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';
import { UpdateAuthorComponent } from './pages/update-author/update-author.component';
import { AddAuthorComponent } from './pages/add-author/add-author.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { HomeLoginComponent } from './pages/home-login/home-login.component';
const routes: Routes = [
  { path: '', component: HomeLoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login-home', component: HomeLoginComponent },
  
  { path: 'home', component: HomeComponent },
 
  { path: 'viewBooks', component: ViewBooksComponent },
  { path:'about',component:AboutUsComponent},
  { path:'feedback',component:Feedback1Component},
  { path:'bookDetails/:bookId',component:BookDetailsComponent},

  { path:'terms-conditions',component:TermsAndConditionComponent},
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path:'resetPassword',component:ResetpasswordComponent},
  { path: 'ViewPurchased',component:ViewPurchasesComponent},
  { path:'terms-conditions',component:TermsAndConditionComponent},
  { path: 'feedback1', component:Feedback1Component},
  { path: 'creditcard',component:CreditcardComponent},
  { path: 'debitcard',component:DebitcardComponent}, 
  { path: 'netbanking',component:NetbankingComponent},
  { path: 'netbanking-login',component:NetbankingLoginComponent},
  { path: 'types-of-payments',component:TypesOfPaymentsComponent},
  { path: 'upi',component:UpiComponent},
  {path: 'add-book', component: AddBookComponent},
  {path: 'update-book', component: UpdateBookComponent},
  {path: 'update-author', component: UpdateAuthorComponent},
  { path: 'add-author', component: AddAuthorComponent },
  { path: 'admin', component: AdminLayoutComponent },


  { path: '**', component: HomeComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
