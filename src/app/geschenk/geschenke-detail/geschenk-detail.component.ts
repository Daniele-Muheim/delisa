import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-geschenke-detail',
  templateUrl: 'geschenk-detail.component.html'
})
export class GeschenkeDetailComponent { 
  parentRouteId: number;
  private sub: any;
  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Get parent ActivatedRoute of this route.
    this.sub = this.route.snapshot.paramMap.get('id');
    console.log(this.sub);
  }
}