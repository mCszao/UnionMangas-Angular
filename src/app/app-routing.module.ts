import { ChapterComponent } from './modules/mangas/chapter/chapter.component';
import { AuthGuard } from './modules/authenticate/guards/auth.guard';
import { RegisterMangaComponent } from './modules/mangas/register-manga/register-manga.component';
import { ListMangaComponent } from './modules/mangas/list-manga/list-manga.component';
import { RegisterUserComponent } from './modules/authenticate/register-user/register-user.component';
import { LoginComponent } from './modules/authenticate/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "mangas"
  },
  {
    path: "mangas",
    component: ListMangaComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "registerUser",
    component: RegisterUserComponent
  },
  {
    path: "mangas/register",
    component: RegisterMangaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "mangas/chapters",
    component: ChapterComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
