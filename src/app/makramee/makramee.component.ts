import { Component } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { MAKRAMEE } from '../../shared/data/data-makramee';

@Component({
  selector: 'app-makramee',
  templateUrl: 'makramee.component.html'
})
export class MakrameeComponent {
  makramee: any[] = [];
  summermakramee: any[] = [];
  wintermakramee: any[] = [];
  dateObj = new Date();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getAllData();
    this.getAllSummerData();
    this.getAllWinterData();
  }

  getAllData(): void {
    this.dataService.getData(MAKRAMEE)
      .subscribe(makramee => this.makramee = makramee);
    this.makramee.reverse();
    const currentMonth = this.dateObj.getMonth() + 1;
    if (currentMonth >= 10 || currentMonth <= 3) {
      this.makramee.sort(function (a, b) {
        if (b.season < a.season) { return -1; }
        if (b.season > a.season) { return 1; }
        return 0;
      });
    } else {
      this.makramee.sort(function (a, b) {
        if (a.season < b.season) { return -1; }
        if (a.season > b.season) { return 1; }
        return 0;
      });
    }
  }

  getAllSummerData() {
    this.summermakramee = this.makramee.filter(function (makramee) {
      return makramee.season === 'sommer';
    });
    for (let i = this.summermakramee.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.summermakramee[i];
      this.summermakramee[i] = this.summermakramee[j];
      this.summermakramee[j] = temp;
    }
  }

  getAllWinterData() {
    this.wintermakramee = this.makramee.filter(function (makramee) {
      return makramee.season === 'winter';
    });

    for (let i = this.wintermakramee.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.wintermakramee[i];
      this.wintermakramee[i] = this.wintermakramee[j];
      this.wintermakramee[j] = temp;
    }
  }
}
