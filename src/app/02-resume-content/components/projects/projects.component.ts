import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

//import {IvyCarouselModule} from 'angular-responsive-carousel';



@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  constructor() {}

  @Input()
  public cvRobertoChild: any = {};

    /* CHANGE CAROUSEL´S IMAGE
    ---------------------------*/

  public indexActualImage:number = 0;         // Initial image with first array´s index
  public pepe = 0;

    // Method to change carousel´s image
  public changeImage(indexProject:number, value:number) {
    let imageLength:number = this.cvRobertoChild.projects[indexProject].images.length;

      // click on left arrow
    if(value < 0) {
      if(this.indexActualImage == 0) {
        this.indexActualImage = imageLength;
      }
    }
      // click on right arrow
    else {
      if(this.indexActualImage == imageLength - 1) {
        this.indexActualImage = -1;
      }
    }
    this.indexActualImage += value;
    this.pepe += value;
  }

   /* MODAL MANAGEMENT
    ---------------------------*/

  public openModal(id:string) {
    let selector = document.getElementById(id);
    selector!.classList.add("modal_container_is_visible");
  }

  public closeModal(id:string) {
    let selector = document.getElementById(id);
    selector!.classList.remove("modal_container_is_visible");
  }




} // End class
