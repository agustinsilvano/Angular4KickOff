import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { OnInit, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export interface FeedData {
  id?: number;
  title: string;
  content: string;
}
@Injectable({ providedIn: 'root' })
export class FeedDataService {
  private feedsInfo: Array<FeedData> = new Array<FeedData>();
  feedAdded: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) {}

  fetchData(feedId: string = '0'): Observable<Array<FeedData>> {
    return this.http
      .get<Array<FeedData>>('http://localhost:61749/feed', {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        params: new HttpParams().set('feedId', feedId)
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

  getDataForFeeds(): Array<FeedData> {
    return this.feedsInfo;
  }

  addFeedData(data: FeedData) {
    this.feedsInfo.push(data);
  }
}
