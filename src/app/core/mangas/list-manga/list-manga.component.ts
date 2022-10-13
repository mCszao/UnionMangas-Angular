import { IGetMangas } from './../../../shared/interface/IGetMangas';
import { MangaService } from 'src/app/shared/services/Manga/manga.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-manga',
  templateUrl: './list-manga.component.html',
  styleUrls: ['./list-manga.component.css']
})
export class ListMangaComponent implements OnInit {
  listManga: IGetMangas[] = [];

  constructor(private service: MangaService) { }

  ngOnInit(): void {
    this.service.listManga().subscribe(response => {
      this.listManga = response.data;
    });
  }

}
