import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalliatveCareComponent } from './palliatve-care.component';

describe('PalliatveCareComponent', () => {
  let component: PalliatveCareComponent;
  let fixture: ComponentFixture<PalliatveCareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PalliatveCareComponent]
    });
    fixture = TestBed.createComponent(PalliatveCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
