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

    // Se almacena una posible variable de sesión para modo ligth/dark
  public lightMode: any = sessionStorage.getItem("mode");

    // Método que cambiará el modo de visualización de la web (modo light/dark)
  public changeMode() {
    let icon = document.getElementById("icon_mode");

    if(this.lightMode == "dark") {
      icon!.setAttribute("src", "../assets/icons/moon-blue-50.x50.png");
      document.getElementsByTagName("link")[3].setAttribute("href", './assets/css/light-mode-styles.css');
      sessionStorage.setItem("mode", "light");
      this.lightMode = "light";
    }
    else {
      icon!.setAttribute("src", "../assets/icons/sun-blue-50.x50.png");
      document.getElementsByTagName("link")[3].setAttribute("href", '#');
      sessionStorage.setItem("mode", "dark");
      this.lightMode = "dark";
    }
  }

}

/*
  window.addEventListener("scroll", function prueba(event) {

      if(this.window.scrollY >= 900) {
        document.getElementsByClassName("top_header_name")[0].setAttribute("style", "display: inline-block");
      }
  })
*/
