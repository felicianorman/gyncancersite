import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateComponent } from './support-us.component';

describe('DonateComponent', () => {
  let component: DonateComponent;
  let fixture: ComponentFixture<DonateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonateComponent],
    });
    fixture = TestBed.createComponent(DonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
