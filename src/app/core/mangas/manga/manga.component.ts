import { IGetMangas } from './../../../shared/interface/IGetMangas';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css']
})
export class MangaComponent implements OnInit {

  @Input()
  manga: IGetMangas = {
    idManga: 0,
    mainTitle: "",
    linkImage: "",
    genres: []
  }

  constructor() { }

  ngOnInit() {
  }

}
