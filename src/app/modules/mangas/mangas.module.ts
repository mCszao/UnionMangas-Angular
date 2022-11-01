import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MangasRoutingModule } from './mangas-routing.module';

import { ListMangaComponent } from './list-manga/list-manga.component';
import { RegisterMangaComponent } from './register-manga/register-manga.component';


@NgModule({
  declarations: [
    ListMangaComponent,
    RegisterMangaComponent
  ],
  imports: [
    CommonModule,
    MangasRoutingModule
  ]
})
export class MangasModule { }
