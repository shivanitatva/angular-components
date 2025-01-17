import { Routes } from '@angular/router';
import { MasterLayoutComponent } from './pages/master-layout/master-layout.component';
import { InputComponentComponent } from './pages/input-component/input-component.component';
import { SelectComponentComponent } from './pages/select-component/select-component.component';
import { FileUploadComponentComponent } from './pages/file-upload-component/file-upload-component.component';
import { SnackbarComponentComponent } from './pages/snackbar-component/snackbar-component.component';
import { RangeSliderComponentComponent } from './pages/range-slider-component/range-slider-component.component';
import { DatepickerComponentComponent } from './pages/datepicker-component/datepicker-component.component';
import { SingleSelectComponent } from './pages/select-component/single-select/single-select.component';
import { SingleSelectSearchComponent } from './pages/select-component/single-select-search/single-select-search.component';
import { MultiselectComponent } from './pages/select-component/multiselect/multiselect.component';
import { MultiselectSearchComponent } from './pages/select-component/multiselect-search/multiselect-search.component';
import { AutocompleteMultiSelectionComponent } from './pages/select-component/autocomplete-multi-selection/autocomplete-multi-selection.component';
import { AutocompleteComponent } from './pages/select-component/autocomplete/autocomplete.component';
import { ColorImageIconSelectionComponent } from './pages/select-component/color-image-icon-selection/color-image-icon-selection.component';
import { MultiselectWithChipComponent } from './pages/select-component/multiselect-with-chip/multiselect-with-chip.component';

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
        path: 'dropdown-component/single-select',
        pathMatch: "full",
        component: SingleSelectComponent
    },
    {
        path: 'dropdown-component/single-select-with-search',
        pathMatch: "full",
        component: SingleSelectSearchComponent
    },
    {
        path: 'dropdown-component/multi-select',
        pathMatch: "full",
        component: MultiselectComponent
    },
    {
        path: 'dropdown-component/multi-select-with-search',
        pathMatch: "full",
        component: MultiselectSearchComponent
    },
    {
        path: 'dropdown-component/multi-select-with-chip',
        pathMatch: "full",
        component: MultiselectWithChipComponent
    },
    {
        path: 'dropdown-component/color-image-icon-selection',
        pathMatch: "full",
        component: ColorImageIconSelectionComponent
    },
    {
        path: 'dropdown-component/autocomplete',
        pathMatch: "full",
        component: AutocompleteComponent
    },
    {
        path: 'dropdown-component/autocomplete-multiselection',
        pathMatch: "full",
        component: AutocompleteMultiSelectionComponent
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
        path: '**',
        redirectTo: "home",
        pathMatch: "full"
    },
];
