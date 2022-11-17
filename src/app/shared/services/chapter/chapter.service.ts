import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { IChapters } from '../../interface/IChapters';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  private readonly API = environment.API_PATH;

  constructor(private httpClient: HttpClient) { }

  addChapters(chapter: IChapters, idManga: number): Observable<IChapters> {
    return this.httpClient.post<IChapters>(`${this.API}/chapters/${idManga}`, chapter);
  }
}
