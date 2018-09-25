import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { MandateListItem } from '@core/models/mandates/mandates-list.model';

@Injectable({
  providedIn: 'root'
})
export class MandatesService {

  constructor(private _http: HttpClient) { }

  list({
    companyId,
    pageNumber,
    pageSize,
    filter = '%7C'
  }: {
      companyId: string,
      pageNumber: number,
      pageSize: number,
      filter?: string
    }): Observable<any> {

    return this._http.get<any>(`${environment.apiUrl}/api/Mandate/List/${companyId}/${pageNumber}/${pageSize}/${filter}`)
      .pipe(map(res => res.data));
  }


}
