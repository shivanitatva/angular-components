import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormControl } from '@angular/forms';

// Angular Material modules
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-single-select',
  imports: [MatCardModule,MatSelectModule,FormsModule,ReactiveFormsModule],
  templateUrl: './single-select.component.html',
  styleUrl: './single-select.component.scss'
})
export class SingleSelectComponent {
  // For disable option from select
  disableSelect = new FormControl(false);

}
