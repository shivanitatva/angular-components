import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormControl } from '@angular/forms';
// Angular Material modules
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Ngx Mat Select Search module
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-select-component',
  imports: [
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,  FormsModule, ReactiveFormsModule, 
    NgxMatSelectSearchModule, NgFor
  ],
  templateUrl: './select-component.component.html',
  styleUrl: './select-component.component.scss'
})
export class SelectComponentComponent {
  disableSelect = new FormControl(false);
  
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

  constructor() {
    this.searchControl.valueChanges.pipe(debounceTime(300)).subscribe(searchText => {
      this.filteredFruits = this.fruits.filter(fruit => fruit.toLowerCase().includes(searchText?.toLowerCase() || ''));
    });
  }
}
