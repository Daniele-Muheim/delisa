import { MAKRAMEE } from './../../../shared/data/data-makramee';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../shared/services/data.service';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-makramee-detail',
  templateUrl: 'makramee-detail.component.html'
})
export class MakrameeDetailComponent {
  makramee: any;
  makrameeRan: any;
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
    this.dataService.getDataByID(this.id, MAKRAMEE)
      .subscribe(makramee => this.makramee = makramee);
    const album = {
      src: this.makramee.img,
      thumb: this.makramee.img
    };
    this._album.push(album);
  }

  createRecommendation() {
    this.dataService.getData(MAKRAMEE).subscribe(makrameeR => this.makrameeRan = makrameeR);
    for (let i = 0; i < 3; i++) {
      let random = Math.floor(Math.random() * this.makrameeRan.length);
      if (random === this.makrameeRan.id || random === 0) {
        random = Math.floor(Math.random() * this.makrameeRan.length);
      }
      this.recommendations.push(this.makrameeRan.find(i => i.id === random));
    }
  }

  open(index: number): void {
    this._lightbox.open(this._album, index);
  }

  close(): void {
    this._lightbox.close();
  }
}
