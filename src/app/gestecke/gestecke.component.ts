import { Component } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { GESTECKE } from '../../shared/data/data-gestecke';

@Component({
  selector: 'app-gestecke',
  templateUrl: 'gestecke.component.html'
})
export class GesteckeComponent {
  gestecke: any[] = [];
  summerGestecke: any[] = [];
  winterGestecke: any[] = [];
  dateObj = new Date();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getAllData();
    this.getAllSummerData();
    this.getAllWinterData();
  }

  getAllData(): void {
    this.dataService.getData(GESTECKE)
      .subscribe(gestecke => this.gestecke = gestecke);
    const currentMonth = this.dateObj.getMonth() + 1;
    if (currentMonth >= 10 || currentMonth <= 3) {
      this.gestecke.sort(function (a, b) {
        if (b.season < a.season) { return -1; }
        if (b.season > a.season) { return 1; }
        return 0;
      });
    } else {
      this.gestecke.sort(function (a, b) {
        if (a.season < b.season) { return -1; }
        if (a.season > b.season) { return 1; }
        return 0;
      });
    }
  }

  getAllSummerData() {
    this.summerGestecke = this.gestecke.filter(function (gestecke) {
      return gestecke.season == "sommer";
    });
    for (var i = this.summerGestecke.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.summerGestecke[i];
      this.summerGestecke[i] = this.summerGestecke[j];
      this.summerGestecke[j] = temp;
    }
  }

  getAllWinterData() {
    this.winterGestecke = this.gestecke.filter(function (gestecke) {
      return gestecke.season == "winter";
    });
  }
}