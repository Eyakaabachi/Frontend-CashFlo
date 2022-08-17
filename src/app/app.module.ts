import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { signinservice } from './signin/signinservice';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseComponent } from './expense/expense.component';
import { IncomeComponent } from './income/income.component';
/* const appRoutes: Routes =[
  {path:'', component: SigninComponent },
  {path:'signup',component: SignupComponent},

]; */
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignupComponent,
    SigninComponent,
    ExpenseComponent,
    IncomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClientModule, signinservice],
  bootstrap: [AppComponent]
})
export class AppModule { }

