import { Component, OnInit, Input } from '@angular/core';

import { MandateListItem } from '@core/models/mandates/mandates-list.model';

@Component({
  selector: 'app-mandate-list-item',
  templateUrl: './mandate-list-item.component.html',
  styleUrls: ['./mandate-list-item.component.scss']
})
export class MandateListItemComponent implements OnInit {

  @Input() mandate: MandateListItem;

  progress = 25;
  progressType: string;

  constructor() { }

  ngOnInit() {
    this.randProgress();
  }

  randProgress() {
    if (this.mandate.status === 'Completed') {
      this.progress = 100;
      this.progressType = 'success';
      return;
    }

    this.progress = Math.floor(Math.random() * 100);
  }

}
