import { Component } from '@angular/core';

@Component({
  selector: 'app-geschenke',
  templateUrl: 'geschenk.component.html'
})
export class GeschenkeComponent { 
  geschenke: any[];
  constructor() {
    this.geschenke = [
      {
        id: 1,
        img: "assets/img/products/product1.jpg",
        price: "17.90"
      },
      {
        img: "assets/img/products/product7.jpg",
      },
      {
        img: "assets/img/products/product1.jpg",
      },
      {
        img: "assets/img/products/product7.jpg",
      },
      {
        img: "assets/img/products/product1.jpg",
      },
      {
        img: "assets/img/products/product7.jpg",
      },
      {
        img: "assets/img/products/product1.jpg",
      },
      {
        img: "assets/img/products/product7.jpg",
      }
    ];
  }
}