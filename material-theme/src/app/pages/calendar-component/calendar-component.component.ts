import { ChangeDetectionStrategy, Component } from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-calendar-component',
  providers: [provideNativeDateAdapter()],
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatDatepickerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar-component.component.html',
  styleUrl: './calendar-component.component.scss'
})
export class CalendarComponentComponent {

}
