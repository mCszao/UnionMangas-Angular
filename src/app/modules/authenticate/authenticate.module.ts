import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticateRoutingModule } from './authenticate-routing.module';
import { RegisterUserComponent } from './register-user/register-user.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [
    RegisterUserComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthenticateRoutingModule,
    FormsModule,
    CardModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    ReactiveFormsModule,
    ToastModule
  ]
})
export class AuthenticateModule { }
