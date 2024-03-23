import { Component } from '@angular/core';

import { ExperienceComponent } from '../../components/experience/experience.component';
import { ExtrasComponent } from '../../components/extras/extras.component';
import { PersonalInformationComponent } from '../../components/personal-information/personal-information.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { TechnologiesComponent } from '../../components/technologies/technologies.component';
import { TrainingComponent } from '../../components/training/training.component';

@Component({
  selector: 'app-resume-page',
  standalone: true,
  imports: [ExperienceComponent, ExtrasComponent, PersonalInformationComponent, ProjectsComponent, TechnologiesComponent, TrainingComponent],
  templateUrl: './resume-page.component.html',
  styleUrl: './resume-page.component.css'
})
export class ResumePageComponent {

}
