import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestorRoutingModule } from './investor-routing.module';
import { InvestorComponent } from './investor.component';

import { DashboardLayoutModule } from '@theme/layouts/dashboard-layout/dashboard-layout.module';

@NgModule({
  imports: [
    CommonModule,
    InvestorRoutingModule,
    DashboardLayoutModule,
  ],
  declarations: [InvestorComponent]
})
export class InvestorModule { }
