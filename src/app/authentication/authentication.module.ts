import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user/new-user.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';



@NgModule({
  declarations: [
    NewUserComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthenticationModule { }
