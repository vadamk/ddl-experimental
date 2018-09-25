import { Component, OnInit, Input } from '@angular/core';

import { MenuItem } from '@core/models/menu.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() items: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
  }

}
