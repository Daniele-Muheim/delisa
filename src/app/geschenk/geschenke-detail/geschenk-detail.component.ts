import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../shared/services/data.service';
import { GESCHENKE } from '../../../shared/data/data-geschenke';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-geschenke-detail',
  templateUrl: 'geschenk-detail.component.html'
})
export class GeschenkeDetailComponent {
  geschenk: any;
  geschenke: any;
  id: number;
  recommendations: any[] = [];
  private _album = [];

  constructor(private route: ActivatedRoute, private dataService: DataService, private _lightbox: Lightbox) { }

  ngOnInit(): void {
    this.getData();
    this.createRecommendation();
  }

  getData(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getDataByID(this.id, GESCHENKE)
      .subscribe(geschenk => this.geschenk = geschenk);
    const album = {
      src: this.geschenk.img,
      thumb: this.geschenk.img
    };
    this._album.push(album)
  }

  createRecommendation() {
    this.dataService.getData(GESCHENKE).subscribe(geschenke => this.geschenke = geschenke);
    for (let i = 0; i < 3; i++) {
      let random = Math.floor(Math.random() * this.geschenke.length) + 1;
      if (random === this.geschenke.id || random === 0) {
        random = Math.floor(Math.random() * this.geschenke.length) + 1;
      }
      this.recommendations.push(this.geschenke.find(i => i.id === random));
    }
  }


  open(index: number): void {
    this._lightbox.open(this._album, index);
  }

  close(): void {
    this._lightbox.close();
  }
}