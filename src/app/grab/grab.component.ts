import { Component } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { GRABSCHMUCK } from '../../shared/data/data-grabschmuck';

@Component({
  selector: 'app-grab',
  templateUrl: 'grab.component.html'
})
export class GrabComponent {
  grabSchmuck: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.dataService.getData(GRABSCHMUCK)
      .subscribe(grabSchmuck => this.grabSchmuck = grabSchmuck);
  }
}

