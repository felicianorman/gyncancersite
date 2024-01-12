import { Component } from '@angular/core';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.scss'],
})
export class TreatmentComponent {
  public toggle: boolean = false;

  public toggleText() {
    this.toggle = !this.toggle;
  }
}
