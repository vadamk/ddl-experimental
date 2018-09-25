import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout.component';

import { SidebarModule } from '@shared/components/sidebar/sidebar.module';
import { ToolbarModule } from '@shared/components/toolbar/toolbar.module';

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
