import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GynCancersComponent } from './gyn-cancers.component';

describe('GynCancersComponent', () => {
  let component: GynCancersComponent;
  let fixture: ComponentFixture<GynCancersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GynCancersComponent]
    });
    fixture = TestBed.createComponent(GynCancersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
