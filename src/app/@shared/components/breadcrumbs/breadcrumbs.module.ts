import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbsRoutingModule } from './breadcrumbs-routing.module';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  imports: [
    CommonModule,
    BreadcrumbsRoutingModule
  ],
  declarations: [
  	BreadcrumbsComponent
  ],
  exports: [
  	BreadcrumbsComponent
  ]
})
export class BreadcrumbsModule { }
