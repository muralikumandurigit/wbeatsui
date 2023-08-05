import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickableCircleComponent } from './clickable-circle.component';

describe('ClickableCircleComponent', () => {
  let component: ClickableCircleComponent;
  let fixture: ComponentFixture<ClickableCircleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickableCircleComponent]
    });
    fixture = TestBed.createComponent(ClickableCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
