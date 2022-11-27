import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, SkillsComponent],
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent {}
