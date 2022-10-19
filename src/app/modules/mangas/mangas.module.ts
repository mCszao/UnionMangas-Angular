import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangasRoutingModule } from './mangas-routing.module';
import { ListMangaComponent } from './list-manga/list-manga.component';


@NgModule({
  declarations: [
    ListMangaComponent
  ],
  imports: [
    CommonModule,
    MangasRoutingModule
  ]
})
export class MangasModule { }
