import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ViewBooksComponent } from './pages/view-books/view-books.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BookService } from 'src/LybSys-services/book-service/book.service';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';
import { CommentListComponent } from './pages/comment-list/comment-list.component';
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
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { UpdateAuthorComponent } from './pages/update-author/update-author.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';
import { AddAuthorComponent } from './pages/add-author/add-author.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeLoginComponent } from './pages/home-login/home-login.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { LoginHomeLayoutComponent } from './layouts/login-home-layout/login-home-layout.component';
import { RegisterLayoutComponent } from './layouts/register-layout/register-layout.component';
@NgModule({
  declarations: [
    AppComponent,
    ViewBooksComponent,
    LoginComponent, RegisterComponent, CommonLayoutComponent,HomeComponent,
     Feedback1Component,FooterComponent, CommentListComponent, AboutUsComponent, TermsAndConditionComponent,
    BookDetailsComponent, ForgotPasswordComponent, ResetpasswordComponent, ViewPurchasesComponent,
    CreditcardComponent, DebitcardComponent, NetbankingComponent, NetbankingLoginComponent,
    TypesOfPaymentsComponent, UpiComponent, AdminLayoutComponent, AddBookComponent, UpdateAuthorComponent,
    UpdateBookComponent, AddAuthorComponent, HomeLoginComponent, LoginLayoutComponent, LoginHomeLayoutComponent, RegisterLayoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
