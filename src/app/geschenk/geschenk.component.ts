import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { GESCHENKE } from '../../shared/data/data-geschenke';

@Component({
  selector: 'app-geschenke',
  templateUrl: 'geschenk.component.html'
})

export class GeschenkeComponent implements OnInit {
  geschenke: any[] = [];

  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.dataService.getData(GESCHENKE)
      .subscribe(geschenke => this.geschenke = geschenke);
  }
}