import { MessageService } from 'primeng/api';
import { DateService } from './../../../shared/utils/date.service';
import { Router } from '@angular/router';
import { MangaService } from './../../../shared/services/Manga/manga.service';
import { IManga } from './../../../shared/interface/IManga';
import { IAuthor } from './../../../shared/interface/IAuthor';
import { ICategories } from './../../../shared/interface/ICategories';
import { CategoiresService } from './../../../shared/services/categoires/categoires.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-manga',
  templateUrl: './register-manga.component.html',
  styleUrls: ['./register-manga.component.scss'],
  providers: [MessageService]
})
export class RegisterMangaComponent implements OnInit {
  categoires: ICategories[] = [];

  mangaObj: IManga = {} as IManga;
  authorObj: IAuthor = {} as IAuthor;
  selectedCategories: ICategories[] = [];

  constructor(
    private categoiresService: CategoiresService,
    private mangaService: MangaService,
    private router: Router,
    private dateService: DateService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.categoiresService.findAllCategory().subscribe(response => {
      this.categoires = response.data;
    })
  }

  showSuccess() {
    this.messageService.add({ severity: "error", summary: "Sucesso", detail: "Manga cadastrado com sucesso!" });
  }

  showError() {
    this.messageService.add({ severity: "error", summary: "Erro", detail: "Dados Inválidos!" });
  }

  return() {
    this.router.navigate(["mangas"]);
  }

  saveManga() {
    const authorArray = [];
    authorArray.push(this.authorObj);
    this.mangaObj.authors = authorArray;
    this.mangaObj.categories = this.selectedCategories;

    this.mangaObj.releaseDate = this.dateService.postDate(this.mangaObj.releaseDate);
    this.mangaObj.lastUpdate = this.dateService.postDate(this.mangaObj.lastUpdate);
    this.authorObj.birthdate = this.dateService.postDate(this.authorObj.birthdate);
    this.mangaObj.status = "Ativo";

    this.mangaService.newManga(this.mangaObj).subscribe(() => {
      this.router.navigate(["mangas"]);
      this.showSuccess();
    }, (error: Error) => {
      console.log(`Post Error: ${error.message}`);
      this.showError();
    })
  }

}
