import { CoreModule } from './../core/core.module';
import { TokenInterceptor } from './../../shared/interceptors/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    RegisterUserComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    RegisterUserComponent,
    LoginComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class AuthenticateModule { }
