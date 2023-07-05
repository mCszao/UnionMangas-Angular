import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { KeyFilterModule } from 'primeng/keyfilter';

import { GalleriaModule } from 'primeng/galleria';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    SidebarModule,
    CalendarModule,
    MultiSelectModule,
    FormsModule,
    RouterModule,
    DropdownModule,
    KeyFilterModule,

    GalleriaModule,

    ReactiveFormsModule

  ],
  exports: [
    CardModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    SidebarModule,
    CalendarModule,
    MultiSelectModule,
    FormsModule,
    RouterModule,
    DropdownModule,
    KeyFilterModule,

    GalleriaModule,
  ],

    ReactiveFormsModule
  ]

})
export class CoreModule {}
