import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimoAnimationComponent } from './simo-animation.component';

describe('SimoAnimationComponent', () => {
  let component: SimoAnimationComponent;
  let fixture: ComponentFixture<SimoAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimoAnimationComponent]
    });
    fixture = TestBed.createComponent(SimoAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
