import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { MandatesService } from '@core/services/mandates/mandates.service';
import { UserService } from '@core/services/user/user.service';
import { MandateListItem } from '@core/models/mandates/mandates-list.model';

@Component({
  selector: 'app-mandates-list',
  templateUrl: './mandates-list.component.html',
  styleUrls: ['./mandates-list.component.scss']
})
export class MandatesListComponent implements OnInit {

  mandatesList$: Observable<MandateListItem[]>;

  constructor(
    private _mandatesService: MandatesService,
    private _userService: UserService,
  ) { }

  ngOnInit() {
    this.mandatesList$ = this._mandatesService.list({
      companyId: this._userService.userInfo.companyId,
      pageNumber: 1,
      pageSize: 20
    }).pipe(
      map(response => response.items)
    );
  }

}
