import { LandingElementComponent } from './../landing-element/landing-element.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-landing-carousel',
  templateUrl: './landing-carousel.component.html',
  styleUrls: ['./landing-carousel.component.css']
})
export class LandingCarouselComponent implements OnInit {
  public elements = [];

  constructor() {
    this.seedData();
  }

  isFirst(elem): boolean {
    return elem === 0;
  }

  seedData() {
    const e1: LandingElementComponent = new LandingElementComponent(
      'Google',
      'First element!',
      'https://s5.eestatic.com/2015/10/03/actualidad/Actualidad_68753203_129196255_1024x576.jpg'
    );

    this.elements.push(e1);

    const e2: LandingElementComponent = new LandingElementComponent(
      'Yahoo',
      'Second element!',
      'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2016/06/174984-yahoo-messenger.jpg'
    );

    this.elements.push(e2);

    const e3: LandingElementComponent = new LandingElementComponent(
      'Bing',
      'Third element!',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRInzJY2KARb3UXofnsifofXitS6e5KLI-sdIKCHi-2yebFJlSx&s'
    );

    this.elements.push(e3);
  }

  ngOnInit() {}
}
