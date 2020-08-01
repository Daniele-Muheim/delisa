import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <mdb-navbar SideClass="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
    <a class="navbar-brand" href="#">
      <img src="./assets/img/logo.png" height="80" alt="delisa logo">
     </a>
    <links>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" *ngFor="let route of leftRoutes">
          <a class="nav-link waves-light" mdbWavesEffect routerLink="/{{ route.routerlink }}" routerLinkActive="{{ route.routerlink }}">{{ route.url }}</a>
        </li>
      </ul>
    </links>
    </mdb-navbar>
  <router-outlet></router-outlet>
  <section style="padding: 0">
    <footer class="page-footer font-small special-color-dark pt-4">
    <div class="container text-center text-md-left mt-5">
      <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h5 class="font-weight-bold">Delisa</h5>
            <p> Wir sind Delisa</p>
            <img src="assets/img/logo.png" style="width: 100px;height: 100px">
          </div>
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h3><i class="fa fa-1x fa-box font-weight-bold"></i> Produkte</h3>
            <p><b>Selbstgemachte Geschenke <br>
            Gestecke<br>
            Geburt<br>
            Gesägtes aus Holz<br>
            Grabschmuck</b>
            </p>
          <p>
          </div>
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        <h3><i class="fa fa-1x fa-address-book font-weight-bold"></i> Kontakt</h3>
        <p>Email: delisa.handwerk@gmail.com <br> 
        <a href="mailto: delisa.handwerk@gmail.com">Mail senden</a></p>
        <p>Usserhus 9<br>6023 Rothenburg</p>
        </div>
      </div>
    </div>
      <hr>
        <div class="col-md-12 py-5">
          <div class="mb-5 flex-center">
            <a class="fb-ic" href="https://www.facebook.com/delisa.handwerk/" Title="Facebook">
              <mdb-icon fab icon="facebook" size="2x" class="white-text mr-md-5 mr-3"></mdb-icon>
            </a>
            <a class="ins-ic" href="https://www.instagram.com/delisa_handwerk/" Title="Instagram">
              <mdb-icon fab icon="instagram" size="2x" class="white-text mr-md-5 mr-3"></mdb-icon>
            </a>
          </div>
        </div>
    </footer> 
  </section>
`
})
export class AppComponent {
  
  fullpage_api: any;

  constructor(private router: Router, private viewportScroller: ViewportScroller) {
    this.router.events.pipe().subscribe((e: any) => {
      setTimeout(() => {
        if (e.position) {
          this.viewportScroller.scrollToPosition(e.position);
        } else if (e.anchor) {
          this.viewportScroller.scrollToAnchor(e.anchor);
        } else {
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      });
    });
  }
  

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }

  leftRoutes: any[] = [
    {
      url: "Home",
      routerlink: "selbstgemachte-geschenke"
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
      routerlink: "gesaegtes",
    },
    {
      url: "Grabschmuck",
      routerlink: "grabschmuck",
    },
    {
      url: "Kontakt",
      routerlink: "contact",
    }
  ];
}

