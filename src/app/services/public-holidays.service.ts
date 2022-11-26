import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PublicHolidaysModel } from '../model/public-holidays.model';

@Injectable()
export class PublicHolidaysService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<PublicHolidaysModel[]> {
    return this._httpClient.get<PublicHolidaysModel[]>('https://date.nager.at/api/v2/publicholidays/2020/US');
  }
}
