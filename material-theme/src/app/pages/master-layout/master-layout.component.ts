import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-master-layout',
  imports: [HeaderComponent, SidebarComponent,RouterModule,MatCardModule],
  templateUrl: './master-layout.component.html',
  styleUrl: './master-layout.component.scss'
})
export class MasterLayoutComponent {

}
