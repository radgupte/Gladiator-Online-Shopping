import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = ['././assets/mobile_phones.jpg', '././assets/laptops.jpg','././assets/headphones.jpg', '././assets/phones.jpg'];

}
