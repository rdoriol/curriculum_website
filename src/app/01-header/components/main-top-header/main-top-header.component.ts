import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-top-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-top-header.component.html',
  styleUrl: './main-top-header.component.css'
})
export class MainTopHeaderComponent {

  @Input()
    // of type any for avoid duplicate code from interface definition Curriculum Vitae
  public cvRobertoChild: any = { }

  public lightMode: boolean = false;

  public changeMode() {
    let icon = document.getElementById("icon_mode");

    if(this.lightMode == false) {
      icon!.setAttribute("src", "../assets/icons/moon-blue-50.x50.png");
      this.lightMode = true;
      document.getElementsByTagName("body")[0].setAttribute("style", "background-color: #f5f5f5;");
    }
    else {
      icon!.setAttribute("src", "../assets/icons/sun-blue-50.x50.png");
      this.lightMode = false;
      document.getElementsByTagName("body")[0].removeAttribute("style");
    }
  }

}
