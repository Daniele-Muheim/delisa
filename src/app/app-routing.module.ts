import { PartnerComponent } from './Partner/partner.component';
import { MakrameeComponent } from './makramee/makramee.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { ContactComponent } from './contact/contact.component';
import { GeburtComponent } from './geburt/geburt.component';
import { GesaegtesComponent } from './gesaegtes/gesaegtes.component';
import { GesaegtesDetailComponent } from './gesaegtes/gesaegtes-detail/gesaegtes-detail.component';
import { GeschenkeComponent } from './geschenk/geschenk.component';
import { GeschenkeDetailComponent } from './geschenk/geschenke-detail/geschenk-detail.component';
import { GesteckeComponent } from './gestecke/gestecke.component';
import { GesteckeDetailComponent } from './gestecke/gestecke-detail/gestecke-detail.component';
import { GrabComponent } from './grab/grab.component';
import { GrabDetailComponent } from './grab/grab-detail/grab-detail.component';
import { HomeComponent } from './home/home.component';
import { MakrameeDetailComponent } from './makramee/makramee-detail/makramee-detail.component';


const routes: Routes = [
  { path: 'selbstgemachte-geschenke', component: HomeComponent },
  { path: 'geschenke', component: GeschenkeComponent },
  { path: 'geschenke-detail/:id', component: GeschenkeDetailComponent },
  { path: 'gestecke', component: GesteckeComponent },
  { path: 'gestecke-detail/:id', component: GesteckeDetailComponent },
  { path: 'geburt', component: GeburtComponent },
  { path: 'gesaegtes', component: GesaegtesComponent },
  { path: 'gesaegtes-detail/:id', component: GesaegtesDetailComponent },
  { path: 'grabschmuck', component: GrabComponent },
  { path: 'grabschmuck-detail/:id', component: GrabDetailComponent },
  { path: 'geknuepftes', component: MakrameeComponent },
  { path: 'geknuepftes-detail/:id', component: MakrameeDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'partner', component: PartnerComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      //anchorScrolling: 'enabled',
    })
  ],
  exports: [
    RouterModule
  ],
  providers: [
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }
