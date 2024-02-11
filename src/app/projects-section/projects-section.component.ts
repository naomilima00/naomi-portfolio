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
export class ProjectsSectionComponent { }
