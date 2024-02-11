import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss',
})

export class AboutMeSectionComponent { }
