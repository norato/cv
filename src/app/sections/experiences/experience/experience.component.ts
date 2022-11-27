import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface ExperienceComponentInputs {
  location: string;
  companyName: string;
  role: string;
  description: string;
  logo: string;
  period: string;
  stack: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  @Input() location!: string
  @Input() companyName!: string
  @Input() role!: string
  @Input() description!: string
  @Input() logo!: string
  @Input() period!: string
  @Input() stack!: string

}
