import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-endo',
  templateUrl: './endo.component.html',
  styleUrl: './endo.component.scss',
})
export class EndoComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  public endoCancer: any[] = [];

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      const pageDetails = history.state.pageDetails;
      this.endoCancer = pageDetails;
    });
  }
}
