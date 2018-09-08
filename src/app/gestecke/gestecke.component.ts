import { Component } from '@angular/core';

@Component({
  selector: 'app-gestecke',
  templateUrl: 'gestecke.component.html'
})
export class GesteckeComponent {
  geschenke: Object[];
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