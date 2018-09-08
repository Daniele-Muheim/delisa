import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar-light">
    <ul class="navbar-nav">
      <li class="social-media">
        <a href="https://www.instagram.com/delisa_handwerk/" style="margin: 10px 10px 3px 10px" class="nav-link fa-2x fa fa-instagram"></a>
        <a href="https://www.facebook.com/delisa.handwerk/" class="nav-link fa-2x fa fa-facebook"></a>
      </li>
    </ul>
  </nav>
    <img src="assets/img/logo.svg" style="width: 100%;height: 181px;">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="mobile-href">
          <a class="navbar-brand" href="#">Delisa</a>
        </div>
        <button class="navbar-toggler collapsed"  (click)="toggleState()" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item" *ngFor="let link of links">
              <a class="nav-link py-3 px-0 px-lg-3" routerLink="/{{ link.routerlink }}" routerLinkActive="{{ link.routerlink }}">{{ link.url }}</a>
            </li>
          </ul>
        </div>
      </nav>
  <router-outlet></router-outlet>
  <router-outlet name="popup"></router-outlet>
`
})
export class AppComponent {
  links: any[] = [
    {
      url: "Home",
      routerlink: "home"
    },
    {
      url: "Geschenke",
      routerlink: "geschenke"
    },
    {
      url: "Gestecke",
      routerlink: "gestecke"
    },
    {
      url: "Geburt",
      routerlink: "geburt"
    },
    {
      url: "Gesägtes",
      routerlink: "gesägtes",
    },
    {
      url: "Kontakt",
      routerlink: "contact",
    }
  ];
  
}
