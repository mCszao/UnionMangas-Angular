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
  styleUrls: ['./register-manga.component.css']
})
export class RegisterMangaComponent implements OnInit {
  categoires: ICategories[] = [];

  mangaObj: IManga = {} as IManga;
  authorObj: IAuthor = {} as IAuthor;
  selectedCategories: ICategories[] = [];

  constructor(
    private categoiresService: CategoiresService,
    private mangaService: MangaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoiresService.findAllCategory().subscribe(response => {
      console.log(response.data);

      this.categoires = response.data;
    })
  }

  saveManga() {
    const authorArray = [];
    authorArray.push(this.authorObj);
    this.mangaObj.authors = authorArray;
    this.mangaObj.categories = this.selectedCategories;

    console.log(this.mangaObj);

    this.mangaService.newManga(this.mangaObj).subscribe(() => {
      this.router.navigate(["mangas"]);
    }, (error: Error) => {
      console.log(`Post Error: ${error.message}`);
    })
  }

}
