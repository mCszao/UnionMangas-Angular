import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { ManuNavbarComponent } from './components/navbar/manu-navbar/manu-navbar.component';
import { LabelInputComponent } from './components/label-input/label-input.component';
import { SelectComponent } from './components/select/select.component';
import { CardComponent } from './components/card/card.component';
import { FormMangaComponent } from './components/form-manga/form-manga.component';
import { FormAuthorComponent } from './components/form-author/form-author.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonComponent,
    ManuNavbarComponent,
    LabelInputComponent,
    SelectComponent,
    CardComponent,
    FormMangaComponent,
    FormAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
