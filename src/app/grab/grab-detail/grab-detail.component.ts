import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';

import { DataService } from '../../../shared/services/data.service';
import { GRABSCHMUCK } from '../../../shared/data/data-grabschmuck';

@Component({
  selector: 'app-grab-detail',
  templateUrl: 'grab-detail.component.html'
})
export class GrabDetailComponent {
  grab: any;
  graeber: any
  id: number;
  recommendations: any[] = [];
  private _album = [];

  constructor(private route: ActivatedRoute, private dataService: DataService, private _lightbox: Lightbox) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getDataByID(this.id, GRABSCHMUCK)
      .subscribe(grab => this.grab = grab);
    const album = {
      src: this.grab.img,
      thumb: this.grab.img
    };
    this._album.push(album);
  }


  open(index: number): void {
    this._lightbox.open(this._album, index);
  }

  close(): void {
    this._lightbox.close();
  }
}