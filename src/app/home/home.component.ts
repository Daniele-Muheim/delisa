import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  mobile: boolean;

  mySlideImages = ['assets/img/products/hauptsite/geschenke.jpg','assets/img/products/hauptsite/geschenke.jpg','assets/img/products/hauptsite/geschenke.jpg'];
  myCarouselImages =['assets/img/products/hauptsite/geschenke.jpg','assets/img/products/hauptsite/geschenke.jpg','assets/img/products/hauptsite/geschenke.jpg'];
    
  mySlideOptions={items: 1, dots: true, nav: true};
  myCarouselOptions={items: 3, dots: true, nav: true};
  images: any[] = [
    {
      "imagePath": "assets/img/products/hauptsite/geschenke.jpg",
      "routerLink": "geschenke",
      "title": "Geschenke"
    },
    {
      "imagePath": "assets/img/products/hauptsite/gestecke.jpg",
      "routerLink": "gestecke",
      "title": "Gestecke"
    },
    {
      "imagePath": "assets/img/products/hauptsite/grab.jpg",
      "routerLink": "grabschmuck",
      "title": "Grabschmuck"
    },
    {
      "imagePath": "assets/img/products/hauptsite/holz.jpg",
      "routerLink": "gesaegtes",
      "title": "Gesägtes"
    },
  ];

  newArrivales1: any[] = [
    {
      "src": "assets/img/products/gesaegtes/gesaegtes_12.jpg",
      "title": "Zweifarbiges Ei mit Eierhalter",
      "text": "Zweifarbiges Ei aus verschiedenen Holzsorten. Mit Eierhalter und in verschieden Holzsorten und grössen verfügbar.",
      "link": "/gesaegtes-detail/12"
    },
    {
      "src": "assets/img/products/gesaegtes/gesaegtes_13_1.jpg",
      "title": "Zweifarbiges Ei mit Eierhalter",
      "text": "Zweifarbiges Ei aus verschiedenen Holzsorten. Mit Eierhalter und in verschieden Holzsorten und grössen verfügbar.",
      "link": "/gesaegtes-detail/13"
    },
    {
      "src": "assets/img/products/gestecke/bilder_gross/gestecke_36.jpg",
      "title": "Oster Gesteck",
      "text": "Schönes Ostergesteck mit verschiedenen Blumen. Perfekt für die Ostern. Die Dekoration verschönert jeden Tisch.",
      "link": "/gestecke-detail/36"
    },
    {
      "src": "assets/img/products/gesaegtes/gesaegtes_17.jpg",
      "title": "Hase aus Holz",
      "text": "Handgemachte Osterhasen aus Holz. In verschiedenen grössen und in verschiedenen Holzsorten bestellbar.",
      "link": "gesaegtes-detail/17"
    },
  ];

  newArrivales2: any[] = [
    {
      "src": "assets/img/products/gesaegtes/gesaegtes_14_1.jpg",
      "title": "Tragetasche aus Holz",
      "text": "Handgemachte Tragtasche aus Holz. In verschiedenen Holzsorten bestellbar. Kann zum Beispiel als Tischdekoration dienen.",
      "link": "/gesaegtes-detail/14"

    },
    {
      "src": "assets/img/products/gesaegtes/gesaegtes_18.jpg",
      "title": "Eckiges Stückholz",
      "text": "Wunderschönes Stückholz mit Regenzgläsern. In verschiedenen grössen und in verschiedenen Holzsorten bestellbar.",
      "link": "/gesaegtes-detail/18"
    },
    {
      "src": "assets/img/products/gesaegtes/gesaegtes_16.jpg",
      "title": "Zweifarbiges Ei",
      "text": "Zweiteiliges Ei aus verschiedenen Holzsorten. In verschieden Holzsorten und grössen verfügbar.",
      "link": "/gesaegtes-detail/16"
    },
    {
      "src": "assets/img/products/gesaegtes/gesaegtes_21.jpg",
      "title": "Ei aus Holz",
      "text": "Ei aus Holz mit Tragtasche. In verschieden Holzsorten und grössen verfügbar.",
      "link": "/gesaegtes-detail/21"
    },
  ]

  ngOnInit() {
    const width = window.innerWidth;
    if (width < 900) {
      this.mobile = true;
    }
  }
}

