import { Component, OnInit } from '@angular/core';

import { WsoFormalizeService } from '../services/wso-formalize.service';
import { response } from '@app/dashboard/investor/reports/db';
import { WsoTableStructure } from '@app/dashboard/investor/reports/models/wso.model';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  tableStructure: WsoTableStructure;

  constructor(
    private _wsoFormalizeService: WsoFormalizeService
  ) { }

  ngOnInit() {
    this.tableStructure = this._wsoFormalizeService.formalize(response);
  }

}
