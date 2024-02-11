import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss', '../app.component.scss'],
})
export class ExperienceSectionComponent { }
