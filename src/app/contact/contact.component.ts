import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contaact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactMedia: any = {
    whatsappNumber: '098098098',
    phoneNumber: '25147878',
    email: 'otracosa@contact.com'
  };

  constructor() {}

  ngOnInit() {}
}
