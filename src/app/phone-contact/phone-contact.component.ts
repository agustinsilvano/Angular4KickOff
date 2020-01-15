import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-phone-contact',
  templateUrl: './phone-contact.component.html',
  styleUrls: ['./phone-contact.component.css']
})
export class PhoneContactComponent implements OnInit {
  @Input() phoneNumber: number;

  constructor() {}

  ngOnInit() {}
}
