import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ManuNavbarComponent } from './components/navbar/manu-navbar/manu-navbar.component';
import { CardComponent } from './components/card/card.component';
import { FormMangaComponent } from './components/form-manga/form-manga.component';
import { FormAuthorComponent } from './components/form-author/form-author.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ManuNavbarComponent,
    CardComponent,
    FormMangaComponent,
    FormAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
