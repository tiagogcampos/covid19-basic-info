import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ApiResponse {
  countryInfo: {
    _id: number;
    flag: string;
  };
  country: string;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  active: number;
  critical: number;
  tests: number;
}

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  url: string = 'https://corona.lmao.ninja/countries/';

  getCountries(): Observable<ApiResponse[]> {
    return this.http.get<ApiResponse[]>(this.url);
  }
}
