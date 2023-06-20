import { IGetMangas } from './../../../shared/interface/IGetMangas';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.scss']
})
export class MangaComponent implements OnInit {
  @Input() manga: IGetMangas = {} as IGetMangas;
  constructor() { }

  ngOnInit(): void {
  }

}
