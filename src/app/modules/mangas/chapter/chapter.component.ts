import { ChapterService } from './../../../shared/services/chapter/chapter.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MangaService } from 'src/app/shared/services/Manga/manga.service';
import { IGetMangas } from 'src/app/shared/interface/IGetMangas';
import { IChapters } from 'src/app/shared/interface/IChapters';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {
  mangaId: IGetMangas[] = [];
  selectedChapter!: IGetMangas;
  newChapter: IChapters = {} as IChapters;

  constructor(
    private mangaService: MangaService,
    private router: Router,
    private chapterService: ChapterService
  ) { }

  ngOnInit(): void {
    this.mangaService.findAllMangas().subscribe(response => {
      this.mangaId = response.data;
    })
  }

  saveChapter() {
    const idManga = this.selectedChapter.idManga;
    this.chapterService.addChapters(this.newChapter, idManga).subscribe(() => {
      this.router.navigate(["mangas"]);

    }, (error) => {
      console.log("Erro: " + error);
    })
  }
}
