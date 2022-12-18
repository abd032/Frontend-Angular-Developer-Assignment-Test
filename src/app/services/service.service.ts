import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  readonly ApiUrl = 'https://www.alphavantage.co';
  constructor(private http: HttpClient) { }

  getEnabledList(): Observable<any> {
    return this.http.get<any>(
      this.ApiUrl +
      '/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo'
    );
  }
}
