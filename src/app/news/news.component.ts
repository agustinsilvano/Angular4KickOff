import { FeedComponent } from './../feed/feed.component';
import { Component, OnInit } from '@angular/core';
import { FeedDataService, FeedData } from '../services/feeddata.service';
import { CanAddComponentDeactivate } from '../services/can-deactivate-new-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
  // providers: [FeedDataService]
})
export class NewsComponent implements CanAddComponentDeactivate {
  feeds: FeedComponent[] = new Array<FeedComponent>();

  lastReadedFeedId: number;
  error = null;
  isFetching: boolean = false;

  constructor(private feedDataService: FeedDataService) {
    this.isFetching = true;
    setTimeout(() => {
      this.feedDataService.fetchData().subscribe(
        data => {
          data.forEach(f => {
            const feedComp = new FeedComponent();
            feedComp.title = f.title;
            feedComp.content = f.content;

            this.feeds.push(feedComp);
          });
        },
        error => {
          this.error = error.message;
        }
      );
      this.isFetching = false;
    }, 3000);
  }

  onSelectedFeed(feed: FeedComponent) {
    this.lastReadedFeedId = feed.id;
  }

  onFeedAdded() {}

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.lastReadedFeedId == null || this.lastReadedFeedId === 0) {
      return confirm(
        'Quieres abandonar la página sin seleccionar ninguna noticia?'
      );
    } else {
      return true;
    }
  }
}
