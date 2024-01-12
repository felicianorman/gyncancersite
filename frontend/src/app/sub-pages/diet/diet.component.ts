import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrl: './diet.component.scss',
})
export class DietComponent {
  constructor(private route: ActivatedRoute) {}
  public doctor: any[] = [];

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      const pageDetails = history.state.pageDetails;
      this.doctor = pageDetails;
    });
  }
}
