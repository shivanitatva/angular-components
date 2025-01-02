import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarMessageComponentComponent } from './snackbar-message-component.component';

describe('SnackbarMessageComponentComponent', () => {
  let component: SnackbarMessageComponentComponent;
  let fixture: ComponentFixture<SnackbarMessageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnackbarMessageComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackbarMessageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
