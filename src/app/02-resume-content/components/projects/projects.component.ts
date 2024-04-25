import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ImagesProjects } from '../../../05-interfaces/projects-images.interface';


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
  public indexInitialImage:number = 0;         // Initial image with first array´s index
  public indexProjectImage: ImagesProjects[] = [{
    indexProject: 0,
    indexImage: 0
  }];

    // Method to change carousel´s image
  public changeImage(indexProject:number, value:number) {
    let imageLength:number = this.cvRobertoChild.projects[indexProject].images.length;

      // click on left arrow
    if(value! < 0) {
      if(this.indexInitialImage == 0) {
        this.indexInitialImage = imageLength;
      }
    }
      // click on right arrow
    else {
      if(this.indexInitialImage == imageLength - 1) {
        this.indexInitialImage = -1;
      }
    }
    this.indexInitialImage += value!;
    console.log(this.indexInitialImage);


  }

    // Method to check actual dot
  public checkDot(index:number) {
    if(this.indexInitialImage == index) {
      return true;
    }
    return;
  }
        // todo EXPLICAR BLOQUE
//  public indexProjectImage: ImagesProjects[] = [];

  public saveIndexs() {
    let lengthProjects = this.cvRobertoChild.projects.length;
    for(let i = 0; i < lengthProjects; i++ ) {
      for(let j = 0; j < this.cvRobertoChild.projects[i].images.length; j++) {
        let element:ImagesProjects = {
          indexProject: i,
          indexImage: j
        }
      //  this.indexProjectImage.push(element);
      }
    }
    //console.log(this.indexProjectImage);
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
