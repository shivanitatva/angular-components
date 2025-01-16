import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteMultiSelectionComponent } from './autocomplete-multi-selection.component';

describe('AutocompleteMultiSelectionComponent', () => {
  let component: AutocompleteMultiSelectionComponent;
  let fixture: ComponentFixture<AutocompleteMultiSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutocompleteMultiSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompleteMultiSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
