import { CoreModule } from './modules/core/core.module';
import { NavMenuComponent } from './shared/components/navbar/nav-menu/nav-menu.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AuthenticateModule } from './modules/authenticate/authenticate.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MangasModule } from './modules/mangas/mangas.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthenticateModule,
    BrowserAnimationsModule,
    CoreModule,
    MangasModule,
    AuthenticateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
