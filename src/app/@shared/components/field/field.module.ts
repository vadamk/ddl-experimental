import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from './field.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FieldComponent],
  exports: [FieldComponent]
})
export class FieldModule { }
