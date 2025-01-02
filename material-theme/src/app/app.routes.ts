import { Routes } from '@angular/router';
import { MasterLayoutComponent } from './pages/master-layout/master-layout.component';
import { InputComponentComponent } from './pages/input-component/input-component.component';
import { SelectComponentComponent } from './pages/select-component/select-component.component';

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
        path: '**',
        redirectTo: "home",
        pathMatch: "full"
    },
];
