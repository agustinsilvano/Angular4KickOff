import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  static lastId = 1;

  @Input() id: number;
  @Input() title: string;
  @Input() content: string;
  @Output() feedEmitter: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    this.id = FeedComponent.lastId;
    FeedComponent.lastId++;
  }

  feedClicked(feedId: number) {
    this.feedEmitter.emit(feedId);
    console.log('Event emited! With value ' + feedId);
  }

  ngOnInit() {}
}
