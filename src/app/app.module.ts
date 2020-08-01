import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Router } from '@angular/router';
import { OwlModule } from 'ngx-owl-carousel';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LightboxModule } from 'ngx-lightbox';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { GeburtComponent } from './geburt/geburt.component';
import { GesaegtesComponent } from './gesaegtes/gesaegtes.component';
import { GesaegtesDetailComponent } from './gesaegtes/gesaegtes-detail/gesaegtes-detail.component';
import { GeschenkeComponent } from './geschenk/geschenk.component';
import { GeschenkeDetailComponent } from './geschenk/geschenke-detail/geschenk-detail.component';
import { GesteckeComponent } from './gestecke/gestecke.component';
import { GesteckeDetailComponent } from './gestecke/gestecke-detail/gestecke-detail.component';
import { GrabComponent } from './grab/grab.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './not-found.component';
import { GrabDetailComponent } from './grab/grab-detail/grab-detail.component';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    FormsModule,
    ReactiveFormsModule,
    LightboxModule,
    MDBBootstrapModule.forRoot(),
    CommonModule,
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule,
    OwlModule,
    AngularFullpageModule
  ],
  declarations: [
    AppComponent,
    ContactComponent,
    GeburtComponent,
    GesaegtesComponent,
    GesaegtesDetailComponent,
    GeschenkeComponent,
    GeschenkeDetailComponent,
    GesteckeComponent,
    GesteckeDetailComponent,
    GrabComponent,
    GrabDetailComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
