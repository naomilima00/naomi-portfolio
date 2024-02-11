import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AboutMeSectionComponent } from './about_me-section/about-me-section.component';
import { ExperienceSectionComponent } from './experience-section/experience-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AboutMeSectionComponent, ExperienceSectionComponent, ProjectsSectionComponent, SkillsSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'naomi-portfolio';
}
