import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  imports: [MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
