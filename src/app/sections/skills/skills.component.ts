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
  mediumUrl = 'https://medium.com/@norato-felipe';

  professional = [
    'Angular',
    'Typescript',
    'Storybook',
    'RxJs',
    'Monorepo',
    'Creating Libs',
    'Unit Tests',
    'Schematics'
  ];

  social = [
    'Good Communication',
    'Mentoring Teammates',
    'Leadership',
    'Team Player',
    'Presenter',
    'Clean Code Evangelist',
  ];
}
