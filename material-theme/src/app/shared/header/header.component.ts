import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  toggleClass(){
    document.querySelector("body")?.classList.toggle("open-menu");
    // document.querySelector("html")?.classList.toggle("open-menu");
  }
}
