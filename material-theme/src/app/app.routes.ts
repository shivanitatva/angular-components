import { Routes } from '@angular/router';
import { MasterLayoutComponent } from './pages/master-layout/master-layout.component';
import { InputComponentComponent } from './pages/input-component/input-component.component';
import { SelectComponentComponent } from './pages/select-component/select-component.component';
import { FileUploadComponentComponent } from './pages/file-upload-component/file-upload-component.component';
import { SnackbarComponentComponent } from './pages/snackbar-component/snackbar-component.component';
import { RangeSliderComponentComponent } from './pages/range-slider-component/range-slider-component.component';
import { CalendarComponentComponent } from './pages/calendar-component/calendar-component.component';

export const routes: Routes = [
    {
        path: 'home',
        pathMatch: "full",
        component: MasterLayoutComponent
    },
    {
        path: 'input-component',
        pathMatch: "full",
        component: InputComponentComponent
    },
    {
        path: 'dropdown-component',
        pathMatch: "full",
        component: SelectComponentComponent
    },
    {
        path: 'file-upload-component',
        pathMatch: "full",
        component: FileUploadComponentComponent
    },
    {
        path: 'snackbar-component',
        pathMatch: "full",
        component: SnackbarComponentComponent
    },
    {
        path: 'range-slider-component',
        pathMatch: "full",
        component: RangeSliderComponentComponent
    },
    {
        path: 'calender-component',
        pathMatch: "full",
        component: CalendarComponentComponent
    },
    {
        path: '**',
        redirectTo: "home",
        pathMatch: "full"
    },
];
