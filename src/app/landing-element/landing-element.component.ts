import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing-element.component.html',
  styleUrls: ['./landing-element.component.css']
})
export class LandingElementComponent implements OnInit {
  public static index = 0;

  public id: number;
  public name: string;
  public description: string;
  public imageSource: string;

  constructor(name: string, description: string, imageSource: string) {
    this.id = LandingElementComponent.index;
    LandingElementComponent.index++;
    this.name = name;
    this.description = description;
    this.imageSource = imageSource;
  }

  ngOnInit() {}
}
