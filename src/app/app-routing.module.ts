import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    loadChildren: () => import("./modules/home/home.module").then((module) => module.HomeModule)
  },
  {
    path: "mangas",
    loadChildren: () => import("./modules/mangas/mangas.module").then((module) => module.MangasModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
