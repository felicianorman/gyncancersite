import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ovarian',
  templateUrl: './ovarian.component.html',
  styleUrl: './ovarian.component.scss',
})
export class OvarianComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  public ovarianCancer: any[] = [];

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      // Retrieve data from navigationExtras
      const pageDetails = history.state.pageDetails;
      console.log(pageDetails);
      this.ovarianCancer = pageDetails;
    });
  }
}
