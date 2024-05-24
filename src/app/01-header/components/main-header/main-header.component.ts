import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css'
})
export class MainHeaderComponent {
  @Input()
   // of type any for avoid duplicate code from interface definition Curriculum Vitae
   public cvRobertoChild: any = { }
}
