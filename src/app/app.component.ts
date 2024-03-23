import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as cvJson from '../assets/data/cv.json';   // import to work with JSON files

import { MainHeaderComponent } from './01-header/components/main-header/main-header.component';
import { MainTopHeaderComponent } from './01-header/components/main-top-header/main-top-header.component';
import { SecondaryHeaderComponent } from './01-header/components/secondary-header/secondary-header.component';
import { SecondaryTopHeaderComponent } from './01-header/components/secondary-top-header/secondary-top-header.component';
import { ResumePageComponent } from './02-resume-content/pages/resume-page/resume-page.component';
import { MainFooterComponent } from './03-footer/components/main-footer/main-footer.component';
import { SecondaryFooterComponent } from './03-footer/components/secondary-footer/secondary-footer.component';
import { MainFormComponent } from './04-form/components/main-form/main-form.component';

import { CurriculumVitae } from './05-interfaces/curr-vitae.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainTopHeaderComponent, SecondaryTopHeaderComponent, MainHeaderComponent, SecondaryHeaderComponent, MainFooterComponent, SecondaryFooterComponent, ResumePageComponent, MainFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor() {};

  public cvJson: any = (cvJson as any).default;   // line to work with JSON files

  public cvRoberto: CurriculumVitae = {
    avatar: this.cvJson.avatar,
    name: this.cvJson.name,
    title: this.cvJson.title,
    location: this.cvJson.location,
    media: this.cvJson.media,
    about: this.cvJson.about,
    technologies: this.cvJson.technologies,
    experience: this.cvJson.experience,
    projects: this.cvJson.projects,
    training: this.cvJson.training,
    extras: this.cvJson.extras
  }
}


