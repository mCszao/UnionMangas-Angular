import { Observable } from 'rxjs';
import { ILogin } from '../../interface/ILogin';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private readonly API = environment.API_PATH;

  constructor(private http: HttpClient) { }

  registerUser(register: ILogin): Observable<ILogin> {
    return this.http.post<ILogin>(`${this.API}/auth/create`, register)
  }

}
