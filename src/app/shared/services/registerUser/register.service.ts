import { Observable } from 'rxjs';
import { IUserInformation } from './../../interface/IUserInformation';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private readonly API = environment.API_PATH;

  constructor(private http: HttpClient) { }

  registerUser(register: IUserInformation): Observable<IUserInformation> {
    return this.http.post<IUserInformation>(`${this.API}/auth/create`, register)
  }

}
