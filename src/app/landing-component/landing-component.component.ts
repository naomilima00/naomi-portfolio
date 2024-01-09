import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-landing-component',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>landing-component works!</p>`,
  styleUrl: './landing-component.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponentComponent { }
