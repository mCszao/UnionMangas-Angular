import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from 'src/app/core/components/navbar/navbar.component';
import { NavMenuComponent } from 'src/app/core/components/navbar/nav-menu/nav-menu.component';
import { MangaComponent } from 'src/app/core/mangas/manga/manga.component';
import { ListMangaComponent } from './../../core/mangas/list-manga/list-manga.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    NavMenuComponent,
    ListMangaComponent,
    MangaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

  ]
})
export class HomeModule { }
