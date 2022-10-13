import { MangaService } from 'src/app/shared/services/Manga/manga.service';
import { IMangas } from './../../../shared/interface/IMangas';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-manga',
  templateUrl: './list-manga.component.html',
  styleUrls: ['./list-manga.component.css']
})
export class ListMangaComponent implements OnInit {
  listManga: IMangas[] = [];

  constructor(private service: MangaService) { }

  ngOnInit(): void {
    this.service.listManga().subscribe(response => {
      this.listManga = response
    });
  }

}
