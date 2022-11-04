import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "authenticate"
  },
  {
    path: "authenticate",
    loadChildren: () => import("./modules/authenticate/authenticate.module").then((module) => module.AuthenticateModule)
  },
  {
    path: "mangas",
    loadChildren: () => import("./modules/mangas/mangas.module").then((module) => module.MangasModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
