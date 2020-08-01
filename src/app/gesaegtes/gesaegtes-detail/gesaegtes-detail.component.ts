import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../shared/services/data.service';
import { GESAEGTES } from '../../../shared/data/data.gesaegtes';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-gesaegtes-detail',
  templateUrl: 'gesaegtes-detail.component.html'
})
export class GesaegtesDetailComponent {
  gesaegtes: any;
  gesaegtesRan: any;
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
    this.dataService.getDataByID(this.id, GESAEGTES)
      .subscribe(gesaegtes => this.gesaegtes = gesaegtes);
    const album = {
      src: this.gesaegtes.img,
      thumb: this.gesaegtes.img
    };
    this._album.push(album)
  }

  createRecommendation() {
    this.dataService.getData(GESAEGTES).subscribe(gesaegtesR => this.gesaegtesRan = gesaegtesR);
    for (let i = 0; i < 3; i++) {
      let random = Math.floor(Math.random() * this.gesaegtesRan.length);
      if (random === this.gesaegtesRan.id || random === 0) {
        random = Math.floor(Math.random() * this.gesaegtesRan.length);
      }
      this.recommendations.push(this.gesaegtesRan.find(i => i.id === random));
    }
  }

  open(index: number): void {
    this._lightbox.open(this._album, index);
  }

  close(): void {
    this._lightbox.close();
  }
}