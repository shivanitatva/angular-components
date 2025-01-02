import { Component, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar,  MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SnackbarMessageComponentComponent } from '../snackbar-message-component/snackbar-message-component.component';

@Component({
  selector: 'app-snackbar-component',
  imports: [MatCardModule, MatButtonModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './snackbar-component.component.html',
  styleUrl: './snackbar-component.component.scss'
})
export class SnackbarComponentComponent {
  private _snackBar = inject(MatSnackBar);

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  openSnackBar(message: string, action?: string) {
    this._snackBar.open(message, action , { duration: 5000 });
  }
  openPositionSnackBar() {
    this._snackBar.open('Snackbar Position example', 'close' , { 
      duration: 6000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition 
    } );
  }
  openCustomSnackBar() {
    this._snackBar.openFromComponent(SnackbarMessageComponentComponent, {
      duration: 50000,
      horizontalPosition: 'left',
      verticalPosition: 'top',
      panelClass: 'toast-message'
    });
  }
}
// Here dropdowns for position is added to select all posible positions, however once can directly pass any single value to above position configuration.

// Pnael class will add class with *mat-snack-bar-container*