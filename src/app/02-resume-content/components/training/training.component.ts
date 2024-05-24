import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './training.component.html',
  styleUrl: './training.component.css'
})
export class TrainingComponent {

  constructor() {}

  @Input()
  public cvRobertoChild:any = {};

    // Method to scroll to the download CV button // todo-> Pending improvement. Method duplicate. Should be obtained from brother component
  public scrollDownload(id:string) {
    let selector = document.getElementById(id);
    selector!.scrollIntoView({block: "end", behavior: "smooth"});
  }

}   // End class
