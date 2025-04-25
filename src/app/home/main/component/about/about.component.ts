import { Component } from '@angular/core';
import { AnimationOnScrollDirective } from '../../directives/animation-on-scroll.directive';
import { zoomIn } from '../../animations/zoom-in.animation';
import { AnimationStates } from '../../interface/animation-states';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { fadeRight } from '../../animations/fade-right.animation';
import { fade } from '../../animations/fade.animation';
import { MatButtonModule } from '@angular/material/button';
import { ScrollService } from '../../services/scroll/scroll.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    AnimationOnScrollDirective,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [
    zoomIn(),
    fadeRight(),
    fade()
  ]
})
export class AboutComponent {
  public animationStates: AnimationStates = {};

  constructor(
    private matIconRegistry: MatIconRegistry, 
    private domSanitizer: DomSanitizer,
    private scrollService: ScrollService
  ) {
    this.matIconRegistry.addSvgIcon('arrow-right', 
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/arrow-right/arrow-right-solid.svg')
    );
  }

  public scrollTo(targetId: string): void {
    this.scrollService.scrollTo(targetId);
  }
}
