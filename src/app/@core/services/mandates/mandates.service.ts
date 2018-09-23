import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MandatesService {

  constructor(private _http: HttpClient) { }

  list(model): Observable<any> {

    const { companyId, pageNumber, pageSize, filter } = model;

    return this._http.get(`${environment.apiUrl}/api/Mandate/List/${companyId}/${pageNumber}/${pageSize}/${filter}`)
      .pipe(map(data => {
        console.log('data: ', data);
      }));
  }


}
