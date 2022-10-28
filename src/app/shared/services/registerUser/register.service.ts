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

  constructor(private httpClient: HttpClient) { }

  registerUser(register: IRegisterUser, isScan: boolean): Observable<IRegisterUser> {
    return this.httpClient.post<IRegisterUser>(`${this.API}/auth/create?isScan=${isScan}`, register)
  }
}
