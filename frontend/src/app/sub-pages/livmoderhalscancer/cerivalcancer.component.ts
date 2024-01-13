import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cerivalcancer',
  templateUrl: './cervicalcancer.component.html',
  styleUrl: './cerivalcancer.component.scss',
})
export class CervicalCancerComponent {
  constructor(private route: ActivatedRoute) {}

  public cervicalCancer: any[] = [];

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      const pageDetails = history.state.pageDetails;
      this.cervicalCancer = pageDetails;
    });
  }
}
