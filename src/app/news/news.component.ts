import { FeedComponent } from './../feed/feed.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  feeds: FeedComponent[] = new Array<FeedComponent>();

  lastReadedFeedId: number;

  constructor() {}

  onSelectedFeed(feed: FeedComponent) {
    this.lastReadedFeedId = feed.id;
    console.log('Updated value : ' + this.lastReadedFeedId);
  }

  ngOnInit() {
    const f1 = new FeedComponent();
    f1.title = 'Estamos de viaje!';
    f1.content = 'Estamos yendo de joda.';
    const f2 = new FeedComponent();
    f2.title = 'Vuelta al laburo';
    f2.content = 'Estamos yendo a laburar.';
    const f3 = new FeedComponent();
    f3.title = 'Aprendiendo angular.';
    f3.content = 'Pa aprender y volar!!!!!';

    this.feeds.push(f1);
    this.feeds.push(f2);
    this.feeds.push(f3);
  }
}
