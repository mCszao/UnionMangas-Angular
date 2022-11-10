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

  constructor(private categoiresService: CategoiresService) { }

  ngOnInit(): void {
    this.categoiresService.findAllCategory().subscribe(response => {
      this.categoires = response.data;
      console.log(response.data.map(teste => {
        console.log(teste.name[0].toUpperCase() + teste.name.slice(1).toLowerCase());
        
      }));
    })
  }

}
