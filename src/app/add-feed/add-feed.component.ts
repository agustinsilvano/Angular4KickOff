import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FeedDataService, FeedData } from '../services/feeddata.service';

@Component({
  selector: 'app-add-feed',
  templateUrl: './add-feed.component.html',
  styleUrls: ['./add-feed.component.css']
})
export class AddFeedComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  addFeedForm;

  constructor(
    private formBuilder: FormBuilder,
    private feedDataService: FeedDataService
  ) {
    this.addFeedForm = this.formBuilder.group({ title: '', content: '' });
  }

  onSubmit(inputValue) {
    this.feedDataService.addFeedData({
      title: inputValue.title,
      content: inputValue.content
    });
    this.feedDataService.feedAdded.next(inputValue);
  }

  ngOnInit() {}
}
