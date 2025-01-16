import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSelectSearchComponent } from './single-select-search.component';

describe('SingleSelectSearchComponent', () => {
  let component: SingleSelectSearchComponent;
  let fixture: ComponentFixture<SingleSelectSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleSelectSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleSelectSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
