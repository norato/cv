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
  experience = new Date().getFullYear() - 2014;

  description = `
    I'm a seasoned frontend developer with ${this.experience}+ years of experience. I excel at
    writing efficient code, software testing, automation, frontend architecture,
    and design systems. I also enjoy writing tech articles and helping my team
    members achieve their best performance and code quality.
  `

}
