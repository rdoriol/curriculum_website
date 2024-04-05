import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  constructor() {}

  @Input()
    // of type any for avoid duplicate code from interface definition Curriculum Vitae
  public cvRobertoChild: any = { }

}
