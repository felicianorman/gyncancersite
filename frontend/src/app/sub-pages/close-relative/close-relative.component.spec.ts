import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseRelativeComponent } from './close-relative.component';

describe('CloseRelativeComponent', () => {
  let component: CloseRelativeComponent;
  let fixture: ComponentFixture<CloseRelativeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloseRelativeComponent]
    });
    fixture = TestBed.createComponent(CloseRelativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
