import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselectWithChipComponent } from './multiselect-with-chip.component';

describe('MultiselectWithChipComponent', () => {
  let component: MultiselectWithChipComponent;
  let fixture: ComponentFixture<MultiselectWithChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiselectWithChipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiselectWithChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
