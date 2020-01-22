import { LandingElementComponent } from './../landing-element/landing-element.component';
import { Component, OnInit, Input } from '@angular/core';
import { LandingDataService } from '../services/landing-data.service';

@Component({
  selector: 'app-landing-carousel',
  templateUrl: './landing-carousel.component.html',
  styleUrls: ['./landing-carousel.component.css']
})
export class LandingCarouselComponent {
  public elements: Array<LandingElementComponent> = [];

  constructor(private landingService: LandingDataService) {
    this.landingService.fetchData().subscribe(data => {
      data.forEach(l => {
        this.elements.push(
          new LandingElementComponent(l.title, l.description, l.url)
        );
      });
    });
  }

  isFirst(elem): boolean {
    return elem === 0;
  }
}
