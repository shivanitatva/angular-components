import { Routes } from '@angular/router';
import { MasterLayoutComponent } from './pages/master-layout/master-layout.component';
import { InputComponentComponent } from './pages/input-component/input-component.component';

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
        path: '**',
        redirectTo: "home",
        pathMatch: "full"
    },
];
