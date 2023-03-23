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
      Working on constructing and migrating bank applications.
      Defining frontend patterns for the team.
      Helping the teammates on the blockers.
      Review and validate features on their Pull Requests.
      Discussing with the architects the best solutions.
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
      Worked on many different projects in a micro-frontend environment.
      Created shared libs and components to white-label applications.
      Created an e2e test library to make it easy to test the happy and alternative flow of the applications.
      Responsible for the onboarding of new developers.
      Review and validate the Pull Requests. And work with the QA and Analytics team.
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
      Worked on the online exchange module of Itaú Internet Banking.
      My responsibilities are to take care of the Frontend architecture and
      code quality and mentor the developers in my squad.
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
      This application is responsible for managing communication from the most significant
      companies from Brazil and Latam, and it sends approximately 1 billion SMS per month.
      For this application, I create a Design System and Angular Schematics to generate code
      to a complete feature's flux. I also create the CD/CI pipelines and culture for the team.
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
      At Cloud, I was responsible for creating the Design System, the application’s
      architecture, and the integrations to VMware’s Single Sign-on and Salesforce.
      Another project I built was a cross-platform application using Electron to create
      reports from the Client’s Vsphere Servers. At last, I helped the DevOps team to
      create the automated code pipeline and build it using Terraform to make infra as code.
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
