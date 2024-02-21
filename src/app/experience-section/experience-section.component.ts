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
export class ExperienceSectionComponent {
  experienceInfo = [
  {
    title: 'Software Developer II',
    company: 'World Fuel Services',
    duration: 'June 2022 - Present',
    companyLocation: 'Miami, FL',
    description: [
      'Developing and maintaining a robust customer-facing website using Angular and TypeScript to create user friendly and appealing user interface',
      'Contributing to an agile development environment, actively participating the software development lifecycle',
      'Led the adoption of different branching practices that have significantly reduced introduced bugs and lead time'
    ]
  },
  {
    title: 'Software Developer Intern',
    company: 'World Fuel Services',
    duration: 'June 2021 - August 2021',
    companyLocation: 'Miami, FL',
    description: [
      'Assisted a team of business analysts and software developers throughout their sprints; creating documentation, tickets, and assisted on the development of new API functionalities',
      'Implemented a business metrics dashboard using Tableau and Snowflake to have a high-level overview of the performance and success of the company\'s performance and APIs'
    ]
  },
  ]
 }
