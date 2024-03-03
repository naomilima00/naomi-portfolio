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

export class AboutMeSectionComponent {

  socialMediaList = [
  {
    mediaName: 'Instagram',
    mediaUrl: 'https://www.instagram.com/naomi_lima/'
  },
  {
    mediaName: 'Linkedin',
    mediaUrl: 'https://www.linkedin.com/in/naomilima/'
  },
  {
    mediaName: 'Github',
    mediaUrl: 'https://github.com/naomilima00/'
  },
  {
    mediaName: 'Email',
    mediaUrl: 'mailto:naomilima00@gmail.com'
  }
]
}
