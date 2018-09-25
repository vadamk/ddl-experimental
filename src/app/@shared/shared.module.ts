import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDatePipe } from './pipes/date-pipe.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserDatePipe
  ],
  exports: [
    UserDatePipe
  ]
})
export class SharedModule { }
