import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForpatientsComponent } from './forpatients.component';

describe('ForpatientsComponent', () => {
  let component: ForpatientsComponent;
  let fixture: ComponentFixture<ForpatientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForpatientsComponent]
    });
    fixture = TestBed.createComponent(ForpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
