import { Component, Input } from '@angular/core';

import { ExperienceComponent } from '../../components/experience/experience.component';
import { ExtrasComponent } from '../../components/extras/extras.component';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { TechnologiesComponent } from '../../components/technologies/technologies.component';
import { TrainingComponent } from '../../components/training/training.component';

@Component({
  selector: 'app-resume-page',
  standalone: true,
  imports: [ExperienceComponent, ExtrasComponent, AboutMeComponent, ProjectsComponent, TechnologiesComponent, TrainingComponent],
  templateUrl: './resume-page.component.html',
  styleUrl: './resume-page.component.css'
})
export class ResumePageComponent {
  constructor() {}

  @Input()
  public cvRobertoChild: any = {}
}
