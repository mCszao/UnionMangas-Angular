import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MangasRoutingModule } from './mangas-routing.module';

import { ListMangaComponent } from './list-manga/list-manga.component';
import { RegisterMangaComponent } from './register-manga/register-manga.component';
import { MangaComponent } from './manga/manga.component';
import { EditMangaComponent } from './edit-manga/edit-manga.component';


@NgModule({
  declarations: [
    ListMangaComponent,
    RegisterMangaComponent,
    MangaComponent,
    EditMangaComponent
  ],
  imports: [
    CommonModule,
    MangasRoutingModule
  ],
})
export class MangasModule { }
