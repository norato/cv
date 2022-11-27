import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ExperienceComponent, ExperienceComponentInputs } from './experience/experience.component';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule, ExperienceComponent],
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {

  private DnGExperience: ExperienceComponentInputs = {
    location: '[Remote] Brazil/Portugal',
    companyName: 'Domestic And General',
    role: 'Senior Frontend Engineer',
    description: `
      Creating apps and libraries for D&G e-commerce. Working on improving libraries,
      enterprise architecture, control state management and design system libraries.
    `,
    logo: 'assets/dongen.png',
    period: 'July 2021/Current',
    stack: 'Angular, NgRx, Jest, Nonorepo, NX'
  }
  private Itau: ExperienceComponentInputs = {
    location: '[Remote] Brazil',
    companyName: 'Itaú',
    role: 'Senior Frontend Engineer',
    description: `
      I have been working on the online exchange module of Itaú Internet Banking.
      My responsibilities are to take care of the Front End architecture and code quality,
      mentoring the developers at my squad.
    `,
    logo: 'assets/itau.png',
    period: 'May 2020/Jul 2021',
    stack: 'Angular, NgRx, Jest'
  }
  private Wave: ExperienceComponentInputs = {
    location: 'Campinas - Brazil',
    companyName: 'Wavy',
    role: 'Senior Frontend Engineer',
    description: `
      I worked on Messaging, the Customer Experience platform focused on messaging teams.
      This application is responsible for managing the communication from the biggest companies
      from Brazil and Latam and it sends approximately 1 billion SMS per month.
      For this application, I create a Design System and the Angular Schematics to generate code
      to a complete feature's flux. I also create the CD/CI pipelines and culture to the team.
    `,
    logo: 'assets/wavy.webp',
    period: 'March 2019/Feb 2020',
    stack: 'Angular, NgRx, Jest, Storybook, Schematics, Material, Jenkins'
  }
  private Wmware: ExperienceComponentInputs = {
    location: 'Campinas - Brazil',
    companyName: 'WMware',
    role: 'Frontend Engineer',
    description: `
      I worked on the creation of Cloud and Pathfinder VMware applications.
      At Cloud, I was responsible for the creation of the Design System, application’s architecture,
      and the integrations to VMware’s Single Sign-on and to the Salesforce.
      At Pathfinder, I was in the creation of the Design System, but I also worked building the
      microservices using Lambda/Serverless. Another project I built was a cross-platform application
      using Electron to create reports from Client’s Vsphere Servers.
      At last, I helped the DevOps team to create the automated code pipeline and build it using
      Terraform to make infra as code.
    `,
    logo: 'assets/VMware-logo.png',
    period: 'August 2017/March 2019',
    stack: 'Angular, NgRx, NodeJS, Electron, Lambda, Terraform'
  }

  experiences = [
    this.DnGExperience,
    this.Itau,
    this.Wave,
    this.Wmware
  ]

}
