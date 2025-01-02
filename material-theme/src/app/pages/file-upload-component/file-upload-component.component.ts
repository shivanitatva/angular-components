import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-file-upload-component',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './file-upload-component.component.html',
  styleUrl: './file-upload-component.component.scss'
})
export class FileUploadComponentComponent {

}
