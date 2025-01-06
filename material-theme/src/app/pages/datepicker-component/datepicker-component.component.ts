import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCalendarCellClassFunction, MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-datepicker-component',
  imports: [MatCardModule, MatFormFieldModule, MatDatepickerModule, MatInputModule, MatButtonModule],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './datepicker-component.component.html',
  styleUrl: './datepicker-component.component.scss'
})
export class DatepickerComponentComponent {
  customDateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the required day of each month.
      return date === 5 || date === 10 ? 'custom-date-class' : '';
    }

    return '';
  };
}
