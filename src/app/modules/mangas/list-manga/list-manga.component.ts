import { IGetMangas } from './../../../shared/interface/IGetMangas';
import { MangaService } from './../../../shared/services/Manga/manga.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-manga',
  templateUrl: './list-manga.component.html',
  styleUrls: ['./list-manga.component.css']
})
export class ListMangaComponent implements OnInit {
  responseManga: IGetMangas[] = []

  constructor(
    private mangaService: MangaService,
  ) { }

  ngOnInit() {
    this.mangaService.releaseWeek().subscribe(response => {
      this.responseManga = response.data
    })
  }

}
