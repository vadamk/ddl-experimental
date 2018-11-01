import { Component, OnInit, Input } from '@angular/core';

import { MenuItem } from '@app/@core/models/menu.model';

@Component({
  selector: 'app-dashboard-layout',
  template: `
    <div class="layout-wrap">
      <app-sidebar
        #Sidebar
        [items]="menuItems">
      </app-sidebar>
      <div class="right-column">
        <app-toolbar></app-toolbar>
        <div class="page-content">
          <app-breadcrumbs></app-breadcrumbs>
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .layout-wrap {
        overflow: hidden;
      }

      .right-column {
        float: left;
        width: calc(100% - 250px);
      }

      .page-content {
        padding: 0 20px 30px;
        height: calc(100% - 70px);
        overflow: hidden;
        overflow-y: auto;
      }

      .page-content /deep/ .page-stub {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 400px;

        font-size: 32;
        text-transform: uppercase;
        color: lightgray;
      }
    `
  ]
})
export class DashboardLayoutComponent implements OnInit {

  @Input() menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
  }

}
