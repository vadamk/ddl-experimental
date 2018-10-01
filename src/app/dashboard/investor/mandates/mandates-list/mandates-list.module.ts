import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

import { SharedModule } from '@shared/shared.module';

import { MandatesListRoutingModule } from './mandates-list-routing.module';

import { MandatesListComponent } from './+mandates-list/mandates-list.component';
import { MandateListItemComponent } from './mandate-list-item/mandate-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MandatesListRoutingModule,
    TooltipModule.forRoot(),
    ProgressbarModule.forRoot(),
  ],
  declarations: [
    MandatesListComponent,
    MandateListItemComponent
  ]
})
export class MandatesListModule { }
