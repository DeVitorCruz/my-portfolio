import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Project } from '../../interface/project';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { ImageModalComponent } from '../../modals/image-modal/image-modal.component';
import { SelectorCollection } from '../../interface/selector-collection';
import { MatButtonModule } from '@angular/material/button';
import { fadeRight } from '../../animations/fade-right.animation';
import { AnimationStates } from '../../interface/animation-states';
import { AnimationOnScrollDirective } from '../../directives/animation-on-scroll.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgFor,
    MatIconModule,
    MatButtonModule,
    AnimationOnScrollDirective 
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  animations: [
    fadeRight()
  ]
})
export class ProjectsComponent {
  
  public currentIndex: number = 0;
  public animationStates: AnimationStates = {};
  public projects: Project[] = [
    { image: 'https://janna-react.vercel.app/images/popup-project-6.jpg', title: 'Website Design', description: 'Web Design, App Design.' },
    { image: 'https://janna-react.vercel.app/images/popup-project-2.jpg', title: 'Website Design', description: 'Web Design, App Design.' },
    { image: 'https://janna-react.vercel.app/images/popup-project-3.jpg', title: 'Website Design', description: 'Web Design, App Design.' },
    { image: 'https://janna-react.vercel.app/images/popup-project-4.jpg', title: 'Website Design', description: 'Web Design, App Design.' },
    { image: 'https://janna-react.vercel.app/images/popup-project-5.jpg', title: 'Website Design', description: 'Web Design, App Design.' },
  ];
  public selectorCollection: SelectorCollection = {
    projectSelector: '.container__div3_project-box',
    testimonialSelector: '.container__div3_carousel-content' 
  };

  constructor(
    private matIconRegistry: MatIconRegistry, 
    private domSanitizer: DomSanitizer,
    private dialog: MatDialog
  ) {
    this.matIconRegistry.addSvgIcon('plus-solid', 
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/plus-solid/plus-solid.svg')
    );
  }

  public openImageModal(imageUrl: string): void {
    this.dialog.open(ImageModalComponent, {
      data: { imageUrl },
      panelClass: 'custom-dialog-panel',
      backdropClass: 'custom-dialog-backgrop',
      width: '100vw',
      height: '100vh',
      maxWidth: '100vw',
      maxHeight: '100vh'
    });
  }

  public prevSlide(selector: string | undefined): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }

    this.updateSlide(selector);
  }
  
  public nextSlide(selector: string | undefined, list: any[]): void {
    if (this.currentIndex < list.length - 1) {
      this.currentIndex++;
    }

    this.updateSlide(selector);
  }
  
  public updateSlide(selector: string | undefined): void {
    const carousel = document.querySelector(`${selector}`) as HTMLElement;
    
    if (carousel && selector) {
      carousel.style.transform = `translateX(-${this.currentIndex*467}px)`;
    }
  }
}
