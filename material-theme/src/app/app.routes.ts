import { Routes } from '@angular/router';
import { MasterLayoutComponent } from './pages/master-layout/master-layout.component';
import { InputComponentComponent } from './pages/input-component/input-component.component';
import { SelectComponentComponent } from './pages/select-component/select-component.component';
import { FileUploadComponentComponent } from './pages/file-upload-component/file-upload-component.component';
import { SnackbarComponentComponent } from './pages/snackbar-component/snackbar-component.component';
import { RangeSliderComponentComponent } from './pages/range-slider-component/range-slider-component.component';
import { DatepickerComponentComponent } from './pages/datepicker-component/datepicker-component.component';
import { AutocompleteComponent } from './pages/autocomplete/autocomplete.component';

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
        path: 'datepicker-component',
        pathMatch: "full",
        component: DatepickerComponentComponent
    },
    {
        path: 'autocomplete',
        pathMatch: "full",
        component: AutocompleteComponent
    },
    {
        path: '**',
        redirectTo: "home",
        pathMatch: "full"
    },
];
