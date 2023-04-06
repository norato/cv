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

  private Bee: ExperienceComponentInputs = {
    location: '[Remote] Brazil/Portugal',
    companyName: 'Bee Engineer',
    role: 'Senior Frontend Engineer',
    description: `
    I am currently leading the construction and migration of applications while defining frontend patterns for my team. I support my colleagues in overcoming any blockers they may face and ensure the quality of the features by reviewing and validating their pull requests. Furthermore, I actively collaborate with architects to identify and implement the best solutions.
    `,
    logo: 'assets/bee.png',
    period: 'October 2021/Current',
    stack: 'Angular, NgRx, Jest, Nonorepo, NX, Angular Universal, Express'
  }

  private DnGExperience: ExperienceComponentInputs = {
    location: '[Remote] Brazil/Portugal',
    companyName: 'Domestic And General',
    role: 'Senior Frontend Engineer',
    description: `
    I have worked on multiple projects in a micro-frontend environment, where I developed shared libraries and components to enable the white-labeling of applications. In addition, I created an e2e test library to streamline the testing process for happy and alternative flows within applications. I also had the privilege of onboarding new developers and reviewing/validating their pull requests. Furthermore, I collaborated with the QA and Analytics team to ensure that project requirements were met.
    `,
    logo: 'assets/dongen.png',
    period: 'July 2021/Dec 2022',
    stack: 'Angular, NgRx, Jest, Nonorepo, NX'
  }

  private Itau: ExperienceComponentInputs = {
    location: '[Remote] Brazil',
    companyName: 'Itaú',
    role: 'Senior Frontend Engineer',
    description: `
    I had the opportunity to work on the online exchange module of Itaú Internet Banking, where I was responsible for the Frontend architecture, ensuring code quality, and helping to create UI libraries. Additionally, I mentored developers within my squad to help them improve their skills and knowledge.
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
    I worked on Messaging, a Customer Experience platform that processes approximately 1 billion SMS messages monthly for some of Brazil and Latam's largest companies. As part of my role, I created a Design System and Angular Schematics to generate code for a complete feature's flow. I also established CD/CI pipelines and a culture of continuous integration and delivery within the team.
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
    I was involved in creating Cloud and Pathfinder VMware applications. I played a crucial role in designing the application architecture, creating the Design System, and integrating the applications with VMware's Single Sign-on and Salesforce. I also developed a cross-platform application using Electron to generate reports from Client's Vsphere Servers. I supported the DevOps team in implementing an automated code pipeline using Terraform to achieve infrastructure as code.
    `,
    logo: 'assets/VMware-logo.png',
    period: 'August 2017/March 2019',
    stack: 'Angular, NgRx, NodeJS, Electron, Lambda, Terraform'
  }

  experiences = [
    this.Bee,
    this.DnGExperience,
    this.Itau,
    this.Wave,
    this.Wmware
  ]

}
