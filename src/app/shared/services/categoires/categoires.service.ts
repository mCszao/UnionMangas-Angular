import { ICategories } from './../../interface/ICategories';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { IPage } from '../../interface/IPage';

@Injectable({
  providedIn: 'root'
})
export class CategoiresService {
  private readonly API = environment.API_PATH;

  constructor(private httpClient: HttpClient) { }

  findAllCategory(): Observable<IPage<ICategories[]>> {
    return this.httpClient.get<IPage<ICategories[]>>(`${this.API}/categoires`);
  }
}
