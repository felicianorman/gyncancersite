import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentComponent } from './treatment.component';

describe('TreatmentComponent', () => {
  let component: TreatmentComponent;
  let fixture: ComponentFixture<TreatmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreatmentComponent]
    });
    fixture = TestBed.createComponent(TreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
