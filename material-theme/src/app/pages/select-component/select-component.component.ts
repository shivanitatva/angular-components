import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, NgClass, NgStyle } from '@angular/common';
import { FormControl } from '@angular/forms';
// Angular Material modules
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';  // Import MatChipsModule
import {MatIconModule} from '@angular/material/icon';
// Ngx Mat Select Search module
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { debounceTime } from 'rxjs';


// interface ColorOptions {
//   value: string;
//   colorValue: string;
//   hexcode: string;
// }

@Component({
  selector: 'app-select-component',
  imports: [
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,  
    FormsModule,
    ReactiveFormsModule, 
    NgxMatSelectSearchModule,
    NgFor,
    NgIf,
    NgClass,
    NgStyle,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule, 
    MatIconModule
  ],
  templateUrl: './select-component.component.html',
  styleUrl: './select-component.component.scss',
  standalone: true
})
export class SelectComponentComponent implements OnInit{

  // For disable option from select
  disableSelect = new FormControl(false);

  // multiple select without search
  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  // single select with search
  
  searchControl = new FormControl();
  selectedFruit: string | undefined;

  fruits: string[] = [
    'Apple',
    'Banana',
    'Grapes',
    'Orange',
    'Pineapple',
    'Strawberry',
    'Mango',
    'Watermelon'
  ];

  filteredFruits: string[] = [...this.fruits];
  searchPlaceholderLabelSelect: string = "Search fruits" ;



  selectedItemsWithoutSearch: string[] = []; // Store selected items
  itemsWithoutSearch: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  // Multiple select with search
  selectedItems: string[] = []; // Array to store selected items
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
   isColorIndeterminate: boolean = false;
   isCountryIndeterminate: boolean = false;

  constructor() {
    this.searchControl.valueChanges.pipe(debounceTime(300)).subscribe(searchText => {
      this.filteredFruits = this.fruits.filter(fruit => fruit.toLowerCase().includes(searchText?.toLowerCase() || ''));
    });
  }
  ngOnInit(): void {
    // Automatically update filteredItems based on search input
    this.searchControlMultiple.valueChanges.subscribe((value) => {
      this.filterItems(value);
    });

    this.searchControlColor.valueChanges.subscribe((value) => {
      this.filterColors(value);
    });

    this.searchControlCountry.valueChanges.subscribe((value) => {
      this.filterCountries(value);
    });

    this.searchIconControl.valueChanges.subscribe((value) => {
      this.filterIcons(value);
    });
  }

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
      this.selectedItems = [...this.filteredItems]; // Update selected items with all filtered items
    } else {
      // Deselect all items when "Select All" is unchecked
      this.selectedItems = [];
    }
    this.updateIndeterminateState();
  }

  // Function to update the indeterminate state of the "Select All" checkbox
  updateIndeterminateState(): void {
    if (this.selectedItems.length > 0 && this.selectedItems.length < this.filteredItems.length) {
      this.isIndeterminate = true; // Indeterminate state when some but not all items are selected
    } else {
      this.isIndeterminate = false; // Reset to false when all or none are selected
    }
  }

  // Function to update selection when an individual item is clicked
  onItemToggle(item: string): void {
    const index = this.selectedItems.indexOf(item);
    console.log(index);    
    this.updateIndeterminateState();
  }

  // Function to remove an item from selectedItems when the chip is removed
  removeItem(item: string): void {
    const index = this.selectedItems.indexOf(item);
    if (index > -1) {
      this.selectedItems.splice(index, 1); // Remove the item      
    }
    this.updateIndeterminateState();
  }


  // color drodown options
  selectedColorItems: { name: string; hex: string }[] = [];
  searchControlColor = new FormControl('');
  filteredColorItems = [
    { name: 'Red', hex: '#FF0000' },
    { name: 'Green', hex: '#00FF00' },
    { name: 'Blue', hex: '#0000FF' },
    { name: 'Purple', hex: '#755cdc' },
    { name: 'Pink', hex: '#FFC0CB' },
    // Add more colors here
  ];
  allColorItems = [...this.filteredColorItems];


  // Function to filter color based on search value
  filterColors(value: string | null): void {
    const searchTerm = value ?? ''; // Use an empty string if value is null
    this.filteredColorItems = searchTerm
      ? this.allColorItems.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
      : [...this.allColorItems]; // Show all items if no search term is provided
  }

  // Function to update selection when an individual item is clicked
  onColorItemToggle(item: { name: string; hex: string }): void {
    this.updateColorIndeterminateState();
  }

  // Function to handle "Select All" toggle
  toggleColorSelectAll(event: boolean): void {
    if (event) {
      // Select all items when "Select All" is checked
      this.selectedColorItems = [...this.filteredColorItems]; // Update selected items with all filtered items
    } else {
      // Deselect all items when "Select All" is unchecked
      this.selectedColorItems = [];
    }
    this.updateColorIndeterminateState();
  }

  // Function to update the indeterminate state of the "Select All" checkbox
  updateColorIndeterminateState(): void {
    if (this.selectedColorItems.length > 0 && this.selectedColorItems.length < this.filteredColorItems.length) {
      this.isColorIndeterminate = true; // Indeterminate state when some but not all items are selected
    } else {
      this.isColorIndeterminate = false; // Reset to false when all or none are selected
    }
  }

  // Function to remove an item from selectedItems when the chip is removed
  removeColorItem(item: { name: string; hex: string }): void {
    const index = this.selectedColorItems.findIndex(selectedItem => selectedItem.name === item.name);
    if (index > -1) {
      this.selectedColorItems.splice(index, 1); // Remove the item      
    }
    this.updateColorIndeterminateState();
  }

  // Image Dropdown
  selectedCountryItems: { name: string; flag: string }[] = [];
  searchControlCountry = new FormControl('');
  filteredCountryItems = [
    { name: 'Test', flag: 'images/upload-icon.svg' },
    { name: 'India', flag: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg' },
    { name: 'Bhutan', flag: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg' },
    { name: 'China', flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg' },
    { name: 'Peru', flag: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Flag_of_Peru_%28state%29.svg' },
    { name: 'Japan', flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg' },
    { name: 'USA  ', flag: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg' },
    { name: 'Turkey', flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg' },
    { name: 'Ukraine', flag: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg' },
    // Add more countries here
  ];
  allCountryItems = [...this.filteredCountryItems];

  // Function to filter country based on search value
  filterCountries(value: string | null): void {
    const searchTerm = value ?? ''; // Use an empty string if value is null
    this.filteredCountryItems = searchTerm
      ? this.allCountryItems.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
      : [...this.allCountryItems]; // Show all items if no search term is provided
  }

  // Function to update selection when an individual item is clicked
  onCountryItemToggle(item: { name: string; flag: string }): void {
    this.updateCountryIndeterminateState();
  }

  // Function to handle "Select All" toggle
  toggleCountrySelectAll(event: boolean): void {
    if (event) {
      // Select all items when "Select All" is checked
      this.selectedCountryItems = [...this.filteredCountryItems]; // Update selected items with all filtered items
    } else {
      // Deselect all items when "Select All" is unchecked
      this.selectedCountryItems = [];
    }
    this.updateCountryIndeterminateState();
  }

  // Function to update the indeterminate state of the "Select All" checkbox
  updateCountryIndeterminateState(): void {
    if (this.selectedCountryItems.length > 0 && this.selectedCountryItems.length < this.filteredCountryItems.length) {
      this.isCountryIndeterminate = true; // Indeterminate state when some but not all items are selected
    } else {
      this.isCountryIndeterminate = false; // Reset to false when all or none are selected
    }
  }

  // Function to remove an item from selectedItems when the chip is removed
  removeCountryItem(item: { name: string; flag: string }): void {
    const index = this.selectedCountryItems.findIndex(selectedItem => selectedItem.name === item.name);
    if (index > -1) {
      this.selectedCountryItems.splice(index, 1); // Remove the item      
    }
    this.updateCountryIndeterminateState();
  }


    // icon select with search
  
    searchIconControl = new FormControl();
    selectedIcon: { name: string; icon: string } | undefined;
  
    iconItems: { name: string; icon: string }[] = [
    { name: 'Home', icon: 'home' },
    { name: 'Settings', icon: 'settings'},
    { name: 'Person', icon: 'person'},
    { name: 'Search', icon: 'search'},
    { name: 'Arrow right', icon: 'chevron_right'},
    { name: 'Arrow left', icon: 'chevron_left'},
    { name: 'Power', icon: 'power'}
    ];
  
    filteredIconItems = [...this.iconItems];
    searchPlaceholderIconSelect: string = "Search icon" ;

      // Function to filter country based on search value
  filterIcons(value: string | null): void {
    const searchTerm = value ?? ''; // Use an empty string if value is null
    this.filteredIconItems = searchTerm
      ? this.iconItems.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
      : [...this.iconItems]; // Show all items if no search term is provided
  }



}
