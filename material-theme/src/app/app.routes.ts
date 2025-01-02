import { Routes } from '@angular/router';
import { MasterLayoutComponent } from './pages/master-layout/master-layout.component';
import { InputComponentComponent } from './pages/input-component/input-component.component';
import { FileUploadComponentComponent } from './pages/file-upload-component/file-upload-component.component';
import { SnackbarComponentComponent } from './pages/snackbar-component/snackbar-component.component';
import { RangeSliderComponentComponent } from './pages/range-slider-component/range-slider-component.component';

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
        path: '**',
        redirectTo: "home",
        pathMatch: "full"
    },
];
