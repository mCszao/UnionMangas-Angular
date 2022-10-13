import { IPage } from './../../interface/IPage';
import { IGetMangas } from './../../interface/IGetMangas';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  private readonly API = `${environment.API_PATH}`
  constructor(private http: HttpClient) { }


  listManga(): Observable<IPage<IGetMangas[]>> {
    const headersnew = new HttpHeaders({
      "content-type": "application/json"
    })
    return this.http.get<IPage<IGetMangas[]>>(`${this.API}/mangas`, { headers: headersnew })
  }
}