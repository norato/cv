import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent {
  experience = new Date().getFullYear() - 2013;

  description = `
    I am an Angular Specialist that loves creating well-written and efficient software.
    Through my ${this.experience}+ years of experience, I have been working in many kinds of fields.
    That gave me a lot of knowledge on clear code. I am passionate about software testing
    and automatization, frontend architecture, and design systems.
    Also, to write tech articles and help teammates to achieve the best of their performances and code quality
  `

}
