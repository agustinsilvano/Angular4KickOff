import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-whats-app-contact',
  templateUrl: './whats-app-contact.component.html',
  styleUrls: ['./whats-app-contact.component.css']
})
export class WhatsAppContactComponent implements OnInit {
  @Input() wppNumber: string;

  constructor() {}

  ngOnInit() {}
}
