import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl,FormsModule, ReactiveFormsModule } from '@angular/forms';
// Angular Material modules
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
// Ngx Mat Select Search module
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@Component({
  selector: 'app-multiselect-with-chip',
  imports: [ 
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,  
    FormsModule,
    ReactiveFormsModule, 
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,
    NgxMatSelectSearchModule
  ],
  templateUrl: './multiselect-with-chip.component.html',
  styleUrl: './multiselect-with-chip.component.scss'
})
export class MultiselectWithChipComponent {

   // Multiple select with search
   selectedItems = new FormControl<string[]>([]); // Array to store selected items
   items: string[] = [
     'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7'
   ];

   filteredItems: string[] = [...this.items]; // Initially, set filtered items to all items
   searchControlMultiple = new FormControl(''); // Control for search input

   // Whether to show the "Select All" checkbox
   showToggleAllCheckbox: boolean = true;

   // Property to hold the placeholder text for the search field
   searchPlaceholderLabel: string = 'Search for items...';
   searchNoEntriesFoundLabel: string = 'No record found';
   
   // Whether the "Select All" checkbox is indeterminate
   isIndeterminate: boolean = false;
   
   // Function to filter items based on search value
 filterItems(value: string | null): void {
   const searchTerm = value ?? ''; // Use an empty string if value is null
   this.filteredItems = searchTerm
     ? this.items.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()))
     : [...this.items]; // Show all items if no search term is provided
 }

 options = [
   { label: 'Option 1', value: '1' },
   { label: 'Option 2', value: '2' },
   { label: 'Option 3', value: '3' },
   { label: 'Option 4', value: '4' },
 ];

 selectedOptions: string[] = [];
 searchCtrl = new FormControl();

 ngOnInit(): void {
   // Automatically update filteredItems based on search input
   this.searchControlMultiple.valueChanges.subscribe((value) => {
     this.filterItems(value);
   });

 }

 toggleAll() {
   if (this.isAllSelected()) {
     this.selectedOptions = []; // Deselect all if already selected
   } else {
     this.selectedOptions = this.options.map(option => option.value); // Select all options
   }
 }

 isAllSelected() {
   return this.selectedOptions.length === this.options.length;
 }

 isSelected(value: string) {
   return this.selectedOptions.indexOf(value) > -1;
 }

 // Function to handle "Select All" toggle
 toggleSelectAll(event: boolean): void {
   if (event) {
     // Select all items when "Select All" is checked
     this.selectedItems.setValue([...this.filteredItems]); // Update selected items with all filtered items
   } else {
     // Deselect all items when "Select All" is unchecked
     this.selectedItems.setValue([]);  ;
   }
   this.updateIndeterminateState();
 }

 // Function to update the indeterminate state of the "Select All" checkbox
 updateIndeterminateState(): void {
  if(((this.selectedItems.value ?? [])?.length) > 0 && (this.selectedItems.value ?? [])?.length < this.filteredItems.length){
    this.isIndeterminate = true;
  }
  else {
    this.isIndeterminate = false; // Reset to false when all or none are selected
  }
 }

 // Function to update selection when an individual item is clicked
//  onItemToggle(item: string): void {
//    const index = this.selectedItems.indexOf(item);
//    console.log(index);    
//    this.updateIndeterminateState();
//  }

 // selected item count
 selectedItemsToDisplay = 4;
 selectedItemsCount = 0;
 // Function to remove an item from selectedItems when the chip is removed
 removeItem(item: string): void {     
  const items = this.selectedItems.value as string[];    
  this.removeFirst(items, item);
  this.selectedItems.setValue(items); // To trigger change detection
  this.updateIndeterminateState();
  this.selectedItemsCount = this.filterItems.length;
}
private removeFirst<T>(array: T[], toRemove: T): void {
  const index = array.indexOf(toRemove);
  if (index !== -1) {
    array.splice(index, 1);
  }
  this.updateIndeterminateState();
}





}
