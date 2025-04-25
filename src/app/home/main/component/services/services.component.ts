import { Component } from '@angular/core';
import { fadeRight } from '../../animations/fade-right.animation';
import { AnimationStates } from '../../interface/animation-states';
import { AnimationOnScrollDirective } from '../../directives/animation-on-scroll.directive';
import { fadeLeft } from '../../animations/fade-left.animation';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgFor } from '@angular/common';
import { Skill } from '../../interface/skill';


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    NgFor,
    AnimationOnScrollDirective,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  animations: [
    fadeRight(),
    fadeLeft()
  ]
})
export class ServicesComponent {
  public animationStates: AnimationStates = {};

  public skills: Skill[] = [
    { 
      title: 'Website Design', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.', 
      rate: 90,
      imageUrl: 'https://janna-react.vercel.app/images/service-01.jpg',
      icon: 'home' 
    },
    { 
      title: 'Website Design', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.', 
      rate: 80,
      imageUrl: 'https://janna-react.vercel.app/images/service-02.jpg',
      icon: 'format_paint' 
    },
    { 
      title: 'SEO Marketing', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.', 
      rate: 85,
      imageUrl: 'https://janna-react.vercel.app/images/service-03.jpg',
      icon: 'watch_later' 
    },
    { 
      title: 'Graphic Design', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.', 
      rate: 70,
      imageUrl: 'https://janna-react.vercel.app/images/service-04.jpg',
      icon: 'color_lens' 
    },
  ];
}
