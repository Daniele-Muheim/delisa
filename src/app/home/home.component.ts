import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  mobile: boolean;

  mySlideImages = ['assets/img/products/hauptsite/geschenke.jpg', 'assets/img/products/hauptsite/geschenke.jpg',
    'assets/img/products/hauptsite/geschenke.jpg'];
  myCarouselImages = ['assets/img/products/hauptsite/geschenke.jpg', 'assets/img/products/hauptsite/geschenke.jpg',
    'assets/img/products/hauptsite/geschenke.jpg'];

  mySlideOptions = { items: 1, dots: true, nav: true };
  myCarouselOptions = { items: 3, dots: true, nav: true };

  images: any[] = [
    {
      'imagePath': 'assets/img/products/hauptsite/geschenke.jpg',
      'routerLink': 'geschenke',
      'title': 'Geschenke'
    },
    {
      'imagePath': 'assets/img/products/hauptsite/gestecke.jpg',
      'routerLink': 'gestecke',
      'title': 'Gestecke'
    },
    {
      'imagePath': 'assets/img/products/hauptsite/holz.jpg',
      'routerLink': 'gesaegtes',
      'title': 'Gesägtes'
    },
    {
      'imagePath': 'assets/img/products/hauptsite/makramee.jpg',
      'routerLink': 'geknuepftes',
      'title': 'Geknüpftes'
    },
    {
      'imagePath': 'assets/img/products/hauptsite/grab.jpg',
      'routerLink': 'grabschmuck',
      'title': 'Grabschmuck'
    }
  ];

  newArrivales1: any[] = [
    {
      'src': 'assets/img/products/gesaegtes/gesaegtes_32.jpg',
      'title': 'Schwemmholz Kollektion',
      // 'text': 'Zweifarbiges Ei aus verschiedenen Holzsorten. Mit Eierhalter und in verschieden Holzsorten und grössen verfügbar.',
      'link': '/gesaegtes-detail/32'
    },
    {
      'src': 'assets/img/products/gesaegtes/gesaegtes_33.jpg',
      'title': 'Schwemmholz Kollektion',
      // 'text': 'Zweifarbiges Ei aus verschiedenen Holzsorten. Mit Eierhalter und in verschieden Holzsorten und grössen verfügbar.',
      'link': '/gesaegtes-detail/33'
    },
    {
      'src': 'assets/img/products/gestecke/bilder_gross/gestecke_72.jpg',
      'title': 'Bezauberndes Gesteck',
      // 'text': 'Schönes Ostergesteck mit verschiedenen Blumen. Perfekt für die Ostern. Die Dekoration verschönert jeden Tisch.',
      'link': '/gestecke-detail/71'
    },
    {
      'src': 'assets/img/products/gesaegtes/gesaegtes_36.jpg',
      'title': 'Schwemmholz Kollektion',
      // 'text': 'Handgemachte Osterhasen aus Holz. In verschiedenen grössen und in verschiedenen Holzsorten bestellbar.',
      'link': 'gesaegtes-detail/36'
    },
  ];

  newArrivales2: any[] = [
    {
      'src': 'assets/img/products/gestecke/bilder_gross/gestecke_88.jpg',
      'title': 'Bezauberndes Gesteck',
      // 'text': 'Handgemachte Tragtasche aus Holz. In verschiedenen Holzsorten bestellbar. Kann zum Beispiel als Tischdekoration dienen.',
      'link': '/gestecke-detail/88'
    },
    {
      'src': 'assets/img/products/gestecke/bilder_gross/gestecke_73.jpg',
      'title': 'Bezauberndes Gesteck',
      // 'text': 'Wunderschönes Stückholz mit Regenzgläsern. In verschiedenen grössen und in verschiedenen Holzsorten bestellbar.',
      'link': '/gesaegtes-detail/74'
    },
    {
      'src': 'assets/img/products/makramee/makramee_16.jpg',
      'title': 'Makramee Kollektion',
      // 'text': 'Zweiteiliges Ei aus verschiedenen Holzsorten. In verschieden Holzsorten und grössen verfügbar.',
      'link': '/makramee-detail/16'
    },
    {
      'src': 'assets/img/products/makramee/makramee_4.jpg',
      'title': 'Makramee Kollektion',
      // 'text': 'Zweiteiliges Ei aus verschiedenen Holzsorten. In verschieden Holzsorten und grössen verfügbar.',
      'link': '/makramee-detail/4'
    },
  ]

  ngOnInit() {
    const width = window.innerWidth;
    if (width < 900) {
      this.mobile = true;
    }
  }
}

