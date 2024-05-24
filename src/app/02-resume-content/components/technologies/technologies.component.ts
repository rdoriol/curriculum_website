import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';


@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent {

  constructor() {}

  @Input()
  public cvRobertoChild:any = {};

} // End class
