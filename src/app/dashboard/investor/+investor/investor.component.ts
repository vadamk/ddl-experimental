import { Component, OnInit } from '@angular/core';

import { MenuItem } from '@app/@core/models/menu.model';

@Component({
  selector: 'app-investor',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.scss']
})
export class InvestorComponent implements OnInit {

  menuModel: MenuItem[] = [];

  constructor() {

    this.menuModel = [
      {
        label: 'Home',
        routerLink: ['home'],
      },
      {
        label: 'Mandates',
        routerLink: ['mandates'],
      },
      {
        label: 'Questionnaires',
        routerLink: ['questionnaires'],
      },
    ];

  }

  ngOnInit() {
  }

}
