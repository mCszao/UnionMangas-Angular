import { MangaComponent } from './manga/manga.component';
import { RegisterMangaComponent } from './register-manga/register-manga.component';
import { ListMangaComponent } from './list-manga/list-manga.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: ListMangaComponent
  },
  {
    path: "registerManga",
    component: RegisterMangaComponent
  },
  {
    path: "manga",
    component: MangaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MangasRoutingModule { }
