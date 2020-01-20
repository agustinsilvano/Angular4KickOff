import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { FeedDataService, FeedData } from '../services/feeddata.service';
import { Observable } from 'rxjs';
import { resolve } from 'url';
import { promise } from 'protractor';

@Component({
  selector: 'app-add-feed',
  templateUrl: './add-feed.component.html',
  styleUrls: ['./add-feed.component.css']
})
export class AddFeedComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() feedSLA: string;
  addFeedForm: FormGroup;
  feedType = ['normal', 'urgency'];

  constructor(private feedDataService: FeedDataService) {}

  onSubmit() {
    this.feedDataService.addFeedData({
      title: this.addFeedForm.value.title,
      content: this.addFeedForm.value.content
    });
    this.feedDataService.feedAdded.next(this.addFeedForm.value);
    this.addFeedForm.reset();
  }

  onTagAdded() {
    const control = new FormControl(null, Validators.required);
    (this.addFeedForm.get('tags') as FormArray).push(control);
  }

  get controls() {
    return (this.addFeedForm.get('tags') as FormArray).controls;
  }

  contentRegexValidator(control: FormControl): { [key: string]: boolean } {
    if (
      control.value != null &&
      (control.value.toLowerCase() as string).includes('atticalabs')
    ) {
      return { invalidContent: true };
    }
    return null;
  }

  titleRegexValidatorAsync(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (
          control.value != null &&
          (control.value.toLowerCase() as string).includes('atticalabs')
        ) {
          resolve({ invalidTitle: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }

  ngOnInit() {
    this.addFeedForm = new FormGroup({
      feedBasics: new FormGroup({
        title: new FormControl(
          null,
          Validators.required,
          this.titleRegexValidatorAsync
        ),
        content: new FormControl(null, [
          Validators.required,
          this.contentRegexValidator
        ])
      }),
      feedSLA: new FormControl('normal'),
      tags: new FormArray([])
    });
  }
}
