import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeSliderComponentComponent } from './range-slider-component.component';

describe('RangeSliderComponentComponent', () => {
  let component: RangeSliderComponentComponent;
  let fixture: ComponentFixture<RangeSliderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RangeSliderComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangeSliderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
