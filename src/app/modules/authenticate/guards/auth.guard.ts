import { environment } from 'src/environments/environment';
import { LoginService } from './../../../shared/services/login/login.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  canActivate(): boolean {
    this.loginService.updateLoggedIn();
    if (localStorage.getItem(environment.Token)) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }

}
