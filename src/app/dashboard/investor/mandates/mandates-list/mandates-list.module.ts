import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MandatesListRoutingModule } from './mandates-list-routing.module';
import { MandatesListComponent } from './mandates-list.component';

@NgModule({
  imports: [
    CommonModule,
    MandatesListRoutingModule
  ],
  declarations: [MandatesListComponent]
})
export class MandatesListModule { }
