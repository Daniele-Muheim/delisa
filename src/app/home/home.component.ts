import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  images: any[] = [
    {
      "imagePath": "assets/img/products/product1.jpg",
      "routerLink": "/gestecke",
      "routerLinkActive": "gestecke"
    },
    {
      "imagePath": "assets/img/products/product2.jpg",
      "routerLink": "/gestecke",
      "routerLinkActive": "gestecke"    
    },
    {
      "imagePath": "assets/img/products/product7.jpg",
      "routerLink": "/gestecke",
      "routerLinkActive": "gestecke"    
    },
    {
      "imagePath": "assets/img/products/product1.jpg",
      "routerLink": "/gestecke",
      "routerLinkActive": "gestecke"    
    },
    {
      "imagePath": "assets/img/products/product1.jpg",
      "routerLink": "/gestecke",
      "routerLinkActive": "gestecke"    
    },
    {
      "imagePath": "assets/img/products/product1.jpg",
      "routerLink": "/gestecke",
      "routerLinkActive": "gestecke"    
    }
  ];
}