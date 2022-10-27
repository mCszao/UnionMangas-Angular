import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { NavMenuComponent } from 'src/app/shared/components/navbar/nav-menu/nav-menu.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    NavMenuComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
