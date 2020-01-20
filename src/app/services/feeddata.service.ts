import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OnInit, Injectable } from '@angular/core';

export interface FeedData {
  id?: number;
  title: string;
  content: string;
}
@Injectable()
export class FeedDataService {
  private feedsInfo: Array<FeedData> = new Array<FeedData>();
  feedAdded: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) {
    console.log('Fetching data : ');
    this.fetchData();
  }

  fetchData() {
    this.http
      .get<Array<any>>('https://localhost:5001/feed', {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      })
      .subscribe(feeds => {
        console.log(feeds);
        // this.feedsInfo = feeds;
        console.log('---------------------');
        console.log(feeds);
      });
  }

  getDataForFeeds(): Array<FeedData> {
    return this.feedsInfo;
  }

  addFeedData(data: FeedData) {
    this.feedsInfo.push(data);
  }
}
