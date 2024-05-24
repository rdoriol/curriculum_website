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
export class ProjectsComponent implements OnInit {

  constructor() {}

  @Input()
  public cvRobertoChild: any = {};


    /* CHANGE CAROUSEL´S IMAGE / MODAL´S IMAGE
    -------------------------------------------*/

  public actualIndexs: ImagesProjects[] = [];

  ngOnInit(): void {
    this.saveActualIndex();
  }

    // Method to make index store
  public saveActualIndex() {
    for(let i = 0; i < this.cvRobertoChild.projects.length; i++) {
      let saveIndex: ImagesProjects = {
        indexProject: i,
        indexImage: 0
      }
      this.actualIndexs.push(saveIndex);
    }
  }

    // Method to change carousel´s image
  public changeImage(indexProject:number, value:number) {
    let imageLength:number = this.cvRobertoChild.projects[indexProject].images.length;
    this.actualIndexs[indexProject].indexProject = indexProject;

      // click on left arrow
    if(value < 0) {
      if(this.actualIndexs[indexProject].indexImage == 0) {
        this.actualIndexs[indexProject].indexImage = imageLength;
      }
    }
      // click on right arrow
    else {
      if(this.actualIndexs[indexProject].indexImage == imageLength - 1) {
        this.actualIndexs[indexProject].indexImage = -1;
      }
    }
    this.actualIndexs[indexProject].indexImage += value;
  }

    // Method to check actual dot
  public checkDot(indexProject:number, index:number) {
    if(this.actualIndexs[indexProject].indexImage == index) {
      return true;
    }
    return;
  }

    // Method to change image when clickinh on a dot
  public changeImageDot(indexProject:number, indexImage:number) {
    this.actualIndexs[indexProject] = {
      indexProject: indexProject,
      indexImage: indexImage
    };
  }


    /* MODAL MANAGEMENT
      ------------------*/
  public openModal(idProject:number) {
    let selector = document.getElementById(idProject.toString());
    selector!.classList.add("modal_container_is_visible");
  }

  public closeModal(idProject:number) {
    let selector = document.getElementById(idProject.toString());
    selector!.classList.remove("modal_container_is_visible");
  }

} // End class
