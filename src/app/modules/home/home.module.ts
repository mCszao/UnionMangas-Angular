import { LoginComponent } from './../../core/login/login.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from 'src/app/core/components/navbar/navbar.component';
import { NavMenuComponent } from 'src/app/core/components/navbar/nav-menu/nav-menu.component';
import { MangaComponent } from 'src/app/core/mangas/manga/manga.component';
import { ListMangaComponent } from './../../core/mangas/list-manga/list-manga.component';
import { RegisterUserComponent } from 'src/app/core/register-user/register-user.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    NavMenuComponent,
    ListMangaComponent,
    MangaComponent,
    LoginComponent,
    RegisterUserComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule

  ]
})
export class HomeModule { }
