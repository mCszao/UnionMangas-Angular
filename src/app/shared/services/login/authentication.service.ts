import { IUserInformation } from '../../interface/IUserInformation';
import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly API = environment.API_PATH;

  constructor(private http: HttpClient) { }

  authenticate(loginUser: IUserInformation): Observable<IUserInformation> {
    return this.http.post<IUserInformation>(`${this.API}/auth/signin`, loginUser)
  }
}
