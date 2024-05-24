import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  constructor() {}

  @Input()
  public cvRobertoChild:any = {};

    // Method to scroll to the download CV button
  public scrollDownload(id:string) {
    let selector = document.getElementById(id);
     selector!.scrollIntoView({block: "end", behavior: "smooth"});
  }

}   // End class
