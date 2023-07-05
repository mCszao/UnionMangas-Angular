import { Router } from '@angular/router';
import { ILogin } from '../../interface/ILogin';
import { environment } from '../../../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly API = environment.API_PATH;

  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedIn.asObservable();

  constructor(private httpClient: HttpClient, private router: Router) { }

  login(loginUser: ILogin): Promise<ILogin> {
    this.updateLoggedIn()
    return this.httpClient.post<ILogin>(`${this.API}/auth/signin`, loginUser).toPromise() as Promise<ILogin>
  }

  logout(): void {
    localStorage.removeItem(environment.Token);
    this.updateLoggedIn();
    this.router.navigate(["/login"])
  }

  updateLoggedIn(): void {
    const token = localStorage.getItem(environment.Token);
    if (token) {
      this.loggedIn.next(true)
    } else {
      this.loggedIn.next(false)
    }
  }
}
