import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFetchComponent } from './movie-fetch.component';

describe('MovieFetchComponent', () => {
  let component: MovieFetchComponent;
  let fixture: ComponentFixture<MovieFetchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieFetchComponent]
    });
    fixture = TestBed.createComponent(MovieFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
