import { Component, OnInit } from '@angular/core';

import { MandatesService } from '@core/services/mandates/mandates.service';

@Component({
  selector: 'app-mandates-list',
  templateUrl: './mandates-list.component.html',
  styleUrls: ['./mandates-list.component.scss']
})
export class MandatesListComponent implements OnInit {

  constructor(
    private _mandatesService: MandatesService
  ) { }

  ngOnInit() {

  }

}
