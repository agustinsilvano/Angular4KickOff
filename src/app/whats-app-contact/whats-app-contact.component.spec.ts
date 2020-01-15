import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsAppContactComponent } from './whats-app-contact.component';

describe('WhatsAppContactComponent', () => {
  let component: WhatsAppContactComponent;
  let fixture: ComponentFixture<WhatsAppContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsAppContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsAppContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
