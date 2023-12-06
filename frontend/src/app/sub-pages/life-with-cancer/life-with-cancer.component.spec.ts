import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifewithcancerComponent } from './life-with-cancer.component';

describe('LifewithcancerComponent', () => {
  let component: LifewithcancerComponent;
  let fixture: ComponentFixture<LifewithcancerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifewithcancerComponent]
    });
    fixture = TestBed.createComponent(LifewithcancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
