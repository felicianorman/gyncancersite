import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeaftercancerComponent } from './lifeaftercancer.component';

describe('LifeaftercancerComponent', () => {
  let component: LifeaftercancerComponent;
  let fixture: ComponentFixture<LifeaftercancerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifeaftercancerComponent]
    });
    fixture = TestBed.createComponent(LifeaftercancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
