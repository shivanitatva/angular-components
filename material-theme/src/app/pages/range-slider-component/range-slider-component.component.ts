import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-range-slider-component',
  imports: [MatCardModule, MatSliderModule],
  templateUrl: './range-slider-component.component.html',
  styleUrl: './range-slider-component.component.scss'
})
export class RangeSliderComponentComponent {

}
