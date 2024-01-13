import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.scss',
})
export class DoctorComponent {
  constructor(private route: ActivatedRoute) {}
  public doctor: any[] = [];

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      const pageDetails = history.state.pageDetails;
      this.doctor = pageDetails;
    });
  }
}
