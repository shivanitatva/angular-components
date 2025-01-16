import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule} from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-autocomplete-multi-selection',
  imports: [MatCardModule, FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatCheckboxModule,
    MatChipsModule,
    MatIcon
  ],
  templateUrl: './autocomplete-multi-selection.component.html',
  styleUrl: './autocomplete-multi-selection.component.scss'
})
export class AutocompleteMultiSelectionComponent {
// Code for autocomplete with select
autocompleteSelect = new FormControl('');
fruits: string[] = ['Apple', 'Banana', 'Grapes', 'Orange', 'Pineapple', 'Strawberry', 'Mango', 'Watermelon'];
filteredFruits: string[] = [...this.fruits];
selectedFruits: string[] = [];

// Filter fruits based on input value but do NOT exclude selected fruits
fruitFilterItems(value: string | null): void {
  const searchTerm = value?.toLowerCase() ?? '';
  this.filteredFruits = searchTerm
    ? this.fruits.filter(fruit => fruit.toLowerCase().includes(searchTerm))
    : [...this.fruits];  // Show all fruits if no search term is entered
}


// Select a fruit when user chooses it from the autocomplete
selectFruit(fruit: string): void {
  if (!this.selectedFruits.includes(fruit)) {
    this.selectedFruits.push(fruit);
    this.autocompleteSelect.setValue(''); // Reset input after selecting
    // this.filteredFruits = this.fruits.filter(f => !this.selectedFruits.includes(f)); // Update the filtered list
  }
}

// Remove a fruit from the selected list
remove(fruit: string): void {
  const index = this.selectedFruits.indexOf(fruit);
  if (index >= 0) {
    this.selectedFruits.splice(index, 1);
    this.filteredFruits = this.fruits.filter(f => !this.selectedFruits.includes(f)); // Update the filtered list
  }
}

// Check if a fruit is selected
isSelected(fruit: string): boolean {
  return this.selectedFruits.includes(fruit);
}
}
