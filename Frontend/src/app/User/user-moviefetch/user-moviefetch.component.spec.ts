import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMoviefetchComponent } from './user-moviefetch.component';

describe('UserMoviefetchComponent', () => {
  let component: UserMoviefetchComponent;
  let fixture: ComponentFixture<UserMoviefetchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserMoviefetchComponent]
    });
    fixture = TestBed.createComponent(UserMoviefetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
