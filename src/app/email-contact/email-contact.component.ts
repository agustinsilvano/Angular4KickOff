import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-email-contact',
  templateUrl: './email-contact.component.html',
  styleUrls: ['./email-contact.component.css']
})
export class EmailContactComponent implements OnInit {
  @Input() email: string;

  constructor() {}

  ngOnInit() {}
}
