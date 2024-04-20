import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';




@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule
    ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  constructor() {}

  @Input()
  public cvRobertoChild: any = {};


} // End class
