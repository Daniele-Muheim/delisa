import { Component } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { GESAEGTES } from '../../shared/data/data.gesaegtes';

@Component({
  selector: 'app-gesaegtes',
  templateUrl: 'gesaegtes.component.html'
})
export class GesaegtesComponent {
  gesaegtes: any[] = [];
  summergesaegtes: any[] = [];
  wintergesaegtes: any[] = [];
  dateObj = new Date();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getAllData();
    this.getAllSummerData();
    this.getAllWinterData();
  }

  getAllData(): void {
    this.dataService.getData(GESAEGTES)
      .subscribe(gesaegtes => this.gesaegtes = gesaegtes);
    const currentMonth = this.dateObj.getMonth() + 1;
    if (currentMonth >= 10 || currentMonth <= 3) {
      this.gesaegtes.sort(function (a, b) {
        if (b.season < a.season) { return -1; }
        if (b.season > a.season) { return 1; }
        return 0;
      });
    } else {
      this.gesaegtes.sort(function (a, b) {
        if (a.season < b.season) { return -1; }
        if (a.season > b.season) { return 1; }
        return 0;
      });
    }
  }

  getAllSummerData() {
    this.summergesaegtes = this.gesaegtes.filter(function (gesaegtes) {
      return gesaegtes.season == "sommer";
    });
    for (var i = this.summergesaegtes.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.summergesaegtes[i];
      this.summergesaegtes[i] = this.summergesaegtes[j];
      this.summergesaegtes[j] = temp;
    }
    console.log(this.summergesaegtes);

  }

  getAllWinterData() {
    this.wintergesaegtes = this.gesaegtes.filter(function (gesaegtes) {
      return gesaegtes.season == "winter";
    });
  }
}