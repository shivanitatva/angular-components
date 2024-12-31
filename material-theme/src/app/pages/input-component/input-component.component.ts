import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-input-component',
  imports: [MatCardModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './input-component.component.html',
  styleUrl: './input-component.component.scss'
})
export class InputComponentComponent {

}
