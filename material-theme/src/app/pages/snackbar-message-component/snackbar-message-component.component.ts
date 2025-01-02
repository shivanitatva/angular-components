import { Component, inject } from '@angular/core';
import {
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-message-component',
  imports: [MatSnackBarLabel,  MatSnackBarActions,  MatSnackBarAction],
  templateUrl: './snackbar-message-component.component.html',
  styleUrl: './snackbar-message-component.component.scss'
})
export class SnackbarMessageComponentComponent {
  snackBarRef = inject(MatSnackBarRef);
} 
