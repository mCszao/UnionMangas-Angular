import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelInputComponent } from './components/label-input/label-input.component';
import { ButtonComponent } from './components/button/button.component';
import { SelectComponent } from './components/select/select.component';



@NgModule({
  declarations: [
    LabelInputComponent,
    ButtonComponent,
    SelectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LabelInputComponent,
    ButtonComponent,
    SelectComponent
  ]
})
export class SharedModule { }
