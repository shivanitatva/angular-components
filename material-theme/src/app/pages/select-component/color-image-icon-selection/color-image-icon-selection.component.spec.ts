import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorImageIconSelectionComponent } from './color-image-icon-selection.component';

describe('ColorImageIconSelectionComponent', () => {
  let component: ColorImageIconSelectionComponent;
  let fixture: ComponentFixture<ColorImageIconSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorImageIconSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorImageIconSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
