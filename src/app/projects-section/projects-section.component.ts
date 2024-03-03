import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss', '../app.component.scss'],
})
export class ProjectsSectionComponent {
  projectsInformation = [
    {
      projectName: 'Project Name',
      projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar diam et nunc gravida dictum. Maecenas volutpat velit id justo convallis maximus. Phasellus venenatis euismod ultrices. Maecenas posuere nunc odio',
      projectLink: ''
    },
    {
      projectName: 'Project Name',
      projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar diam et nunc gravida dictum. Maecenas volutpat velit id justo convallis maximus. Phasellus venenatis euismod ultrices. Maecenas posuere nunc odio',
      projectLink: ''
    }
  ];
 }
