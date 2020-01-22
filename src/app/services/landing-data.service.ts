import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface LandingData {
  title: string;
  description: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class LandingDataService {
  constructor(private http: HttpClient) {}

  fetchData(feedId: string = '0'): Observable<Array<LandingData>> {
    return this.http
      .get<Array<LandingData>>('http://localhost:61749/landing', {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      })
      .pipe(
        map(responseData => {
          const feeds = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              feeds.push({ ...responseData[key], id: key });
            }
          }
          return feeds;
        })
      );
  }
}
