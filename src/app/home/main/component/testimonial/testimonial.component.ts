import { Component } from '@angular/core';
import { fadeUp } from '../../animations/fade-up.animation';
import { fade } from '../../animations/fade.animation';
import { AnimationStates } from '../../interface/animation-states';
import { AnimationOnScrollDirective } from '../../directives/animation-on-scroll.directive';
import { NgFor } from '@angular/common';
import { Testimonial } from '../../interface/testimonial';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [
    NgFor,
    AnimationOnScrollDirective,
    MatButtonModule
  ],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss',
  animations: [
    fadeUp(),
    fade()
  ]
})
export class TestimonialComponent {
  public animationStates: AnimationStates = {};

  public currentTestimonial: number = 0;

  public testimonials: Testimonial[] = [
      {
        name: 'Pamela Anders',
        company: 'Company Name',
        feedback: 'Donec tellus sem, tempor ac purus a, porttitor lobortis purus. Etiam quis nisl eget ex pulvinar consectetur. Suspendisse potenti. Cras non elementum risus. Fusce massa tellus, consequat a rutrum et, aliquam a lacus. Quisque viverra egestas tincidunt. Nunc nec nisi sed enim consectetur ullamcorper. Vestibulum at neque tortor. Pellentesque urna enim, ultricies at tortor eu, elementum egestas leo. In hac habitasse platea dictumst.',
        imagePath: 'https://janna-react.vercel.app/images/avatar-3.jpg'
      },
      {
        name: 'Pamela Anders',
        company: 'Company Name',
        feedback: 'Donec tellus sem, tempor ac purus a, porttitor lobortis purus. Etiam quis nisl eget ex pulvinar consectetur. Suspendisse potenti. Cras non elementum risus. Fusce massa tellus, consequat a rutrum et, aliquam a lacus. Quisque viverra egestas tincidunt. Nunc nec nisi sed enim consectetur ullamcorper. Vestibulum at neque tortor. Pellentesque urna enim, ultricies at tortor eu, elementum egestas leo. In hac habitasse platea dictumst.',
        imagePath: 'https://janna-react.vercel.app/images/avatar-3.jpg'
      },
      {
        name: 'Pamela Anders',
        company: 'Company Name',
        feedback: 'Donec tellus sem, tempor ac purus a, porttitor lobortis purus. Etiam quis nisl eget ex pulvinar consectetur. Suspendisse potenti. Cras non elementum risus. Fusce massa tellus, consequat a rutrum et, aliquam a lacus. Quisque viverra egestas tincidunt. Nunc nec nisi sed enim consectetur ullamcorper. Vestibulum at neque tortor. Pellentesque urna enim, ultricies at tortor eu, elementum egestas leo. In hac habitasse platea dictumst.',
        imagePath: 'https://janna-react.vercel.app/images/avatar-3.jpg'
      },
    ];

  public getTestimonialTranslate(): string {
    const percent  = this.currentTestimonial*-100;

    return `translateX(${percent}%)`;
  }

  public prevTestimonial(): void {
    if (this.currentTestimonial > 0) {
      this.currentTestimonial--;
    } else {
      this.currentTestimonial = this.testimonials.length - 1;
    }
  }

  public nextTestimonial(): void {
    if (this.currentTestimonial < this.testimonials.length - 1) {
      this.currentTestimonial++;
    } else {
      this.currentTestimonial = 0;
    }
  }

}
