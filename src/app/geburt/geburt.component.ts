import { Component } from '@angular/core';

@Component({
  selector: 'app-geburt',
  templateUrl: 'geburt.component.html'
})
export class GeburtComponent {
  geschenke: any[];
  constructor() {
    this.geschenke = [
      {
        img: "assets/img/products/product1.jpg",
      },
      {
        img: "assets/img/products/product7.jpg",
      },
    ];
  }
}