import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html'
})
export class ContactComponent {
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