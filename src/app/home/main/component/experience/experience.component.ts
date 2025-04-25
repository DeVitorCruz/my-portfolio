import { Component } from '@angular/core';
import { fadeRight } from '../../animations/fade-right.animation';
import { AnimationStates } from '../../interface/animation-states';
import { AnimationOnScrollDirective } from '../../directives/animation-on-scroll.directive';
import { MatCardModule } from '@angular/material/card';
import { Experience } from '../../interface/experience';
import { fadeUp } from '../../animations/fade-up.animation';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    NgFor,
    AnimationOnScrollDirective,
    MatCardModule
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  animations: [
    fadeRight(),
    fadeUp()
  ]
})
export class ExperienceComponent {
  public animationStates: AnimationStates = {};

  public experiences: Experience[] = [
    { 
      skillName: 'Front-end Developer',
      area: 'WELAB | REMOTE',
      period: 'JAN 2019 - PRESENT',
      availability: 'FULL TIME',
      title: 'About Company',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .'
    },
    { 
      skillName: 'Front-end Developer',
      area: 'WELAB | REMOTE',
      period: 'JAN 2019 - PRESENT',
      availability: 'FULL TIME',
      title: 'About Company',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .'
    },
    { 
      skillName: 'Front-end Developer',
      area: 'WELAB | REMOTE',
      period: 'JAN 2019 - PRESENT',
      availability: 'FULL TIME',
      title: 'About Company',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .'
    },
  ];
}
