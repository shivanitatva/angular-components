import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl,FormsModule, ReactiveFormsModule } from '@angular/forms';
// Angular Material modules
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
// Ngx Mat Select Search module
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-single-select-search',
  imports: [
     MatSelectModule,
    FormsModule,
    ReactiveFormsModule, 
    CommonModule,
    MatCardModule,
    NgxMatSelectSearchModule,
  ],
  templateUrl: './single-select-search.component.html',
  styleUrl: './single-select-search.component.scss'
})
export class SingleSelectSearchComponent {

  constructor() {
    this.searchControl.valueChanges.pipe(debounceTime(300)).subscribe(searchText => {
      this.filteredFruits = this.fruits.filter(fruit => fruit.toLowerCase().includes(searchText?.toLowerCase() || ''));
    });
  }

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
  searchNoEntriesFoundLabel: string = 'No record found';
}
