import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NgxTrimDirectiveModule } from 'ngx-trim-directive';

import { UserDatePipe } from './pipes/date-pipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxTrimDirectiveModule
  ],
  declarations: [
    UserDatePipe
  ],
  exports: [
    FormsModule,
    NgxTrimDirectiveModule,
    UserDatePipe,
  ]
})
export class SharedModule { }
