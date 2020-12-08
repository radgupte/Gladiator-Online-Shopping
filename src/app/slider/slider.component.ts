import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  images = ['././assets/carousel1.png', '././assets/carousel2.png','././assets/carousel5.jpg'];

  constructor() { }

  ngOnInit(): void {
  }

}
