import { CommonModule } from '@angular/common';
import { Component, Input, OnInit} from '@angular/core';

import { NgxGalleryModule } from 'ngx-gallery';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';




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


  public galleryOptions: NgxGalleryOptions[] = [];
  public galleryImages: NgxGalleryImage[] = [];

  ngOnInit(): void {

      this.galleryOptions = [
          {
              width: '600px',
              height: '400px',
              thumbnailsColumns: 4,
              imageAnimation: NgxGalleryAnimation.Slide
          },
          // max-width 800
          {
              breakpoint: 800,
              width: '100%',
              height: '600px',
              imagePercent: 80,
              thumbnailsPercent: 20,
              thumbnailsMargin: 20,
              thumbnailMargin: 20
          },
          // max-width 400
          {
              breakpoint: 400,
              preview: false
          }
      ];

      this.galleryImages = [
          {
              small: 'assets/1-small.jpg',
              medium: '../assets/images/projects/ld-softgestion/LD-SoftGestion-1.png',
              big: 'assets/1-big.jpg'
          },
          {
              small: 'assets/2-small.jpg',
              medium: '../assets/images/projects/ld-softgestion/LD-SoftGestion-2.png',
              big: 'assets/2-big.jpg'
          },
          {
              small: 'assets/3-small.jpg',
              medium: '../assets/images/projects/ld-softgestion/LD-SoftGestion-3.png',
              big: 'assets/3-big.jpg'
          }
      ];
  } // end OnInit()

} // End class
