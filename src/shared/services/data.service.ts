import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class DataService {

  constructor() { }

  getData(data): Observable<any[]> {
    return of(data);
  }

  getDataByID(id: number, data): Observable<any> {
    return of(data.find(data => data.id === id));
  }
}