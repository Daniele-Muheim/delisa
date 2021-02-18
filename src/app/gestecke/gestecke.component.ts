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
    this.gestecke.reverse();
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
      return gestecke.season === 'sommer';
    });
    for (let i = this.summerGestecke.length - 1; i > 0; i--) {
      const randomNumber = Math.floor(Math.random() * (i + 1));
      const temp = this.summerGestecke[i];
      this.summerGestecke[i] = this.summerGestecke[randomNumber];
      this.summerGestecke[randomNumber] = temp;
    }
  }

  getAllWinterData() {
    this.winterGestecke = this.gestecke.filter(function (gestecke) {
      return gestecke.season === 'winter';
    });

    for (let i = this.winterGestecke.length - 1; i > 0; i--) {
      const randomNumber = Math.floor(Math.random() * (i + 1));
      const temp = this.winterGestecke[i];
      this.winterGestecke[i] = this.winterGestecke[randomNumber];
      this.winterGestecke[randomNumber] = temp;
    }
  }
}
