import { Component, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scroll } from '@angular/router';


@Component({
  selector: 'app-main-top-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-top-header.component.html',
  styleUrl: './main-top-header.component.css'
})
export class MainTopHeaderComponent {

  constructor() {}

  @Input()
    // of type any for avoid duplicate code from interface definition Curriculum Vitae
  public cvRobertoChild: any = { }

    // Se almacena una variable de sesión para controlar modo ligth/dark
  public lightMode: any = sessionStorage.getItem("mode");

    // Método que cambiará el modo de visualización de la web (modo light/dark)
  public changeMode() {
    let icon = document.getElementById("icon_mode");

    if(this.lightMode == "dark") {
      icon!.setAttribute("src", "../assets/icons/moon-blue-100x100.png");
      document.getElementsByTagName("link")[3].setAttribute("href", './assets/css/light-mode-styles.css');
      sessionStorage.setItem("mode", "light");
      this.lightMode = "light";
    }
    else {
      icon!.setAttribute("src", "../assets/icons/sun-blue-64x64.png");
      document.getElementsByTagName("link")[3].setAttribute("href", '#');
      sessionStorage.setItem("mode", "dark");
      this.lightMode = "dark";
    }
  }

    // attribute to control TopHeader´s scroll
  public windowScroll: number = 0;

    // Added listening directive to handle scroll event
  @HostListener("window:scroll", ["$event"])
  async onScroll(event: Scroll) {
    this.windowScroll = window.scrollY;
  }

    // attribute to control width screen
  public screenWidht: number = window.innerWidth;
    // Added listener directive to handle resize event
  @HostListener("window:resize", ["$event.target.innerWidth"])
  async onResize(width: number) {
    this.screenWidht = width;
  }


}   // fin de la clase



  // PRUEBAS eliminar

  /*
    // evento para suscribir addEventListener
  ngOnInit(): void {
    window.addEventListener("scroll",  () => {

      if(window.scrollY >= 50) {
      document.getElementsByClassName("top_header_name")[0].setAttribute("style", "display: inline-block");
      }
      else {
      document.getElementsByClassName("top_header_name")[0].removeAttribute("style");
      }
    });
  }
    // evento para des-suscribir addEventListener
  ngOnDestroy(): void {
    window.removeEventListener("scroll", this.ngOnInit);
  }
  */
