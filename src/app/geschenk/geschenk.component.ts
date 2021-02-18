import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { GESCHENKE } from '../../shared/data/data-geschenke';

@Component({
  selector: 'app-geschenke',
  templateUrl: 'geschenk.component.html'
})

export class GeschenkeComponent implements OnInit {
  geschenke: any[] = [];
  gestecke: any[] = [];
  summerGeschenke: any[] = [];
  winterGeschenke: any[] = [];
  dateObj = new Date();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getAllData();
    this.getAllSummerData();
    this.getAllWinterData();
  }

  getData(): void {
    this.dataService.getData(GESCHENKE)
      .subscribe(geschenke => this.geschenke = geschenke);
  }

  getAllData(): void {
    this.dataService.getData(GESCHENKE)
      .subscribe(geschenke => this.geschenke = geschenke);
    this.geschenke.reverse();
    const currentMonth = this.dateObj.getMonth() + 1;
    if (currentMonth >= 10 || currentMonth <= 3) {
      this.geschenke.sort((a, b) => {
        if (b.season < a.season) { return -1; }
        if (b.season > a.season) { return 1; }
        return 0;
      });
    } else {
      this.geschenke.sort((a, b) => {
        if (a.season < b.season) { return -1; }
        if (a.season > b.season) { return 1; }
        return 0;
      });
    }
  }

  getAllSummerData() {
    this.summerGeschenke = this.geschenke.filter(function (gesaegtes) {
      return gesaegtes.season === 'sommer';
    });
    for (let i = this.summerGeschenke.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.summerGeschenke[i];
      this.summerGeschenke[i] = this.summerGeschenke[j];
      this.summerGeschenke[j] = temp;
    }
  }

  getAllWinterData() {
    this.winterGeschenke = this.geschenke.filter(function (gesaegtes) {
      return gesaegtes.season === 'winter';
    });

    for (let i = this.winterGeschenke.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.winterGeschenke[i];
      this.winterGeschenke[i] = this.winterGeschenke[j];
      this.winterGeschenke[j] = temp;
    }
  }
}
