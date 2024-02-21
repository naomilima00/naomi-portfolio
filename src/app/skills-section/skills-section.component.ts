import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss', '../app.component.scss'],
})
export class SkillsSectionComponent {
  technicalSkills = ['HTML', 'CSS', 'Tailwind CSS', 'TypeScript' , 'JavaScript', 'Angular', 'React'];
  designSkills = ['Figma', 'Adobe XD'];
  productivitySkills = ['Google Analytics', 'Launch Darkly', 'Jira/Confluence', 'Github'];
 }
