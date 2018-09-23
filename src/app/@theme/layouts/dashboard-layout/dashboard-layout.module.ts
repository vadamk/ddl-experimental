import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout.component';

import { SidebarModule } from '@theme/components/sidebar/sidebar.module';
import { ToolbarModule } from '@theme/components/toolbar/toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    ToolbarModule,
  ],
  declarations: [DashboardLayoutComponent],
  exports: [DashboardLayoutComponent]
})
export class DashboardLayoutModule { }
