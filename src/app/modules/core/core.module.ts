import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsModule } from 'primeng/steps';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    SidebarModule,
    MenubarModule,
    StepsModule,
    CalendarModule,
    MultiSelectModule
  ],
  exports: [
    CardModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    ToastModule,
    SidebarModule,
    MenubarModule,
    StepsModule,
    CalendarModule,
    MultiSelectModule
  ]
})
export class CoreModule { }
