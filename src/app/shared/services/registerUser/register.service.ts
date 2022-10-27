import { IRegisterUser } from './../../interface/IRegisterUser';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private readonly API = environment.API_PATH;

  constructor(private http: HttpClient) { }

  registerUser(register: IRegisterUser): Observable<IRegisterUser> {
    return this.http.post<IRegisterUser>(`${this.API}/auth/create`, register)
  }

}
