import { LoginComponent } from './../../core/login/login.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RegisterUserComponent } from 'src/app/core/register-user/register-user.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { NavMenuComponent } from 'src/app/shared/components/navbar/nav-menu/nav-menu.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    NavMenuComponent,
    RegisterUserComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    CardModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule
  ]
})
export class HomeModule { }
