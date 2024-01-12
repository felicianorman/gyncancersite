import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vulva',
  templateUrl: './vulva.component.html',
  styleUrl: './vulva.component.scss',
})
export class VulvaComponent {
  constructor(private route: ActivatedRoute) {}
  public vulvaCancer: any[] = [];

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      const pageDetails = history.state.pageDetails;
      this.vulvaCancer = pageDetails;
    });
  }
}
