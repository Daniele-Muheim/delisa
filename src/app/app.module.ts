import { NgModule, NO_ERRORS_SCHEMA  }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Router } from '@angular/router';

import { AppComponent }            from './app.component';
import { AppRoutingModule }        from './app-routing.module';

import { PageNotFoundComponent }   from './not-found.component';
import { GeschenkeComponent } from './geschenk/geschenk.component';
import { HomeComponent } from './home/home.component';
import { GesteckeComponent } from './gestecke/gestecke.component';
import { GeburtComponent } from './geburt/geburt.component'
import { ContactComponent } from './contact/contact.component';
import { GeschenkeDetailComponent } from './geschenk/geschenke-detail/geschenk-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    GeschenkeComponent,
    GeschenkeDetailComponent,
    HomeComponent,
    GesteckeComponent,
    GeburtComponent,
    ContactComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
