import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Router } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LightboxModule } from 'ngx-lightbox';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    
    FormsModule,
    ReactiveFormsModule,
    LightboxModule,
    MDBBootstrapModule.forRoot(),
    AppModule,
    BrowserTransferStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }
