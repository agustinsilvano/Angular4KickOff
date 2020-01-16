import { EventEmitter, Output } from '@angular/core';

export interface FeedData {
  title: string;
  content: string;
}

export class FeedDataService {
  private feedsInfo: Array<FeedData> = new Array<FeedData>();
  feedAdded: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.seedData();
  }

  seedData() {
    const f1: FeedData = {
      title: 'Estamos de viaje!',
      content: 'Estamos yendo de joda.'
    };
    const f2: FeedData = {
      title: 'Vuelta al laburo',
      content: 'Estamos yendo a laburar.'
    };
    const f3: FeedData = {
      title: 'Aprendiendo angular.',
      content: 'Pa aprender y volar!!!!!'
    };

    this.feedsInfo.push(f1);
    this.feedsInfo.push(f2);
    this.feedsInfo.push(f3);
  }

  getDataForFeeds(): Array<FeedData> {
    return this.feedsInfo;
  }

  addFeedData(data: FeedData) {
    this.feedsInfo.push(data);
  }
}
