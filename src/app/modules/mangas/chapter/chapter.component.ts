import { ChapterService } from './../../../shared/services/chapter/chapter.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MangaService } from 'src/app/shared/services/Manga/manga.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {

  constructor(
    private mangaService: MangaService,
    private router: Router,
    private chapterService: ChapterService
  ) { }

  ngOnInit(): void {
  }

}
