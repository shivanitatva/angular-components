import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
// Angular Material modules
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-multiselect',
  imports: [FormsModule, ReactiveFormsModule,MatCardModule,MatSelectModule, CommonModule],
  templateUrl: './multiselect.component.html',
  styleUrl: './multiselect.component.scss'
})
export class MultiselectComponent {
  // multiple select without search
  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  selectedItemsWithoutSearch: string[] = []; // Store selected items
}
