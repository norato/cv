import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  youtubeUrl = 'https://www.youtube.com/playlist?list=PLUiA-wncNaaqf1B-0RAdSQNz9fL-oEkek'

  professional = [
    'Angular 10+',
    'Typescript',
    'Storybook',
    'RxJs',
    'Jest / Karma and Jasmine',
    'Node / Express / NestJS',
  ];

  social = [
    'Good Communication',
    'Mentoring',
    'Leadership(Small groups)',
    'Team Player',
    'Presenter / Lecture',
    'Clean code evangelist',
  ]

}
