import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../shared/services/data.service';
import { GESTECKE } from '../../../shared/data/data-gestecke';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-gestecke-detail',
  templateUrl: 'gestecke-detail.component.html'
})
export class GesteckeDetailComponent {
  gesteck: any;
  id: number;
  gestecke: any;
  recommendations: any[] = [];
  private _album = [];

  constructor(private route: ActivatedRoute, private dataService: DataService, private _lightbox: Lightbox) { }

  ngOnInit(): void {
    this.getData();
    this.createRecommendation();
  }

  getData(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getDataByID(this.id, GESTECKE)
      .subscribe(gesteck => this.gesteck = gesteck);
    const album = {
      src: this.gesteck.img,
      thumb: this.gesteck.img
    };
    this._album.push(album);
  }

  createRecommendation() {
    this.dataService.getData(GESTECKE).subscribe(gestecke => this.gestecke = gestecke);
    for (let i = 0; i < 3; i++) {
      let random = Math.floor(Math.random() * this.gesteck.length);
      if (random === this.gesteck.id || random === 0) {
        random = Math.floor(Math.random() * this.gesteck.length);
      }
      this.recommendations.push(this.gesteck.find(i => i.id === random));
    }
  }

  open(index: number): void {
    this._lightbox.open(this._album, index);
  }

  close(): void {
    this._lightbox.close();
  }
}