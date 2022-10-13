import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly API = `${environment.API_PATH}`
  constructor(private http: HttpClient) { }

  authenticate(user: string, password: string): Observable<any> {
    return this.http.post(`${this.API}`, {
      userName: user,
      passwordUser: password
    })
  }
}
