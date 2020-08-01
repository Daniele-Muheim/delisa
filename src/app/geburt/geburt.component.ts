import { Component } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { GEBURT } from '../../shared/data/data-geburt';

@Component({
  selector: 'app-geburt',
  templateUrl: 'geburt.component.html'
})
export class GeburtComponent {
  geburt: any[] = [];
  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.dataService.getData(GEBURT)
      .subscribe(geburt => this.geburt = geburt);
  }
}