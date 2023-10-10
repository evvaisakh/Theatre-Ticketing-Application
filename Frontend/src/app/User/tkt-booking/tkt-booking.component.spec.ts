import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TktBookingComponent } from './tkt-booking.component';

describe('TktBookingComponent', () => {
  let component: TktBookingComponent;
  let fixture: ComponentFixture<TktBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TktBookingComponent]
    });
    fixture = TestBed.createComponent(TktBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
