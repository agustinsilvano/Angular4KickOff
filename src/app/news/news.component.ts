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
export class NewsComponent implements OnInit, CanAddComponentDeactivate {
  feeds: FeedComponent[] = new Array<FeedComponent>();

  lastReadedFeedId: number;

  constructor(private feedDataService: FeedDataService) {
    this.feedDataService.feedAdded.subscribe(() => {
      this.feeds.splice(0, this.feeds.length);
      const feedData: Array<FeedData> = this.feedDataService.getDataForFeeds();

      feedData.forEach(f => {
        const feedComp = new FeedComponent();
        feedComp.title = f.title;
        feedComp.content = f.content;

        this.feeds.push(feedComp);
      });
    });
  }

  onSelectedFeed(feed: FeedComponent) {
    this.lastReadedFeedId = feed.id;
  }

  onFeedAdded() {}

  ngOnInit() {
    const feedData: Array<FeedData> = this.feedDataService.getDataForFeeds();

    feedData.forEach(f => {
      const feedComp = new FeedComponent();
      feedComp.title = f.title;
      feedComp.content = f.content;

      this.feeds.push(feedComp);
    });
  }

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
