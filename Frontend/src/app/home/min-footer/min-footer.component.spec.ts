import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinFooterComponent } from './min-footer.component';

describe('MinFooterComponent', () => {
  let component: MinFooterComponent;
  let fixture: ComponentFixture<MinFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinFooterComponent]
    });
    fixture = TestBed.createComponent(MinFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
