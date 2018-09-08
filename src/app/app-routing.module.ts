import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { GeschenkeComponent } from './geschenk/geschenk.component';
import { HomeComponent } from './home/home.component';
import { GesteckeComponent } from './gestecke/gestecke.component';
import { GeburtComponent } from './geburt/geburt.component';
import { ContactComponent } from './contact/contact.component';
import { GeschenkeDetailComponent } from './geschenk/geschenke-detail/geschenk-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'geschenke', component: GeschenkeComponent },
  { path: 'geschenke-detail/:id', component: GeschenkeDetailComponent },
  { path: 'gestecke', component: GesteckeComponent },
  { path: 'geburt', component: GeburtComponent},
  { path: 'contact', component: ContactComponent},
 // { path: '**', component: HomeComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: true, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategy,

      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }