import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToAchieveComponent } from './to-achieve.component';

describe('ToAchieveComponent', () => {
  let component: ToAchieveComponent;
  let fixture: ComponentFixture<ToAchieveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToAchieveComponent]
    });
    fixture = TestBed.createComponent(ToAchieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
