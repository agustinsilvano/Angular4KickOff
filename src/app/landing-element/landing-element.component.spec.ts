import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LandingElementComponent } from "./landing-element.component";

describe("LandingComponent", () => {
  let component: LandingElementComponent;
  let fixture: ComponentFixture<LandingElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingElementComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
