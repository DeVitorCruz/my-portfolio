import { Component, OnInit } from '@angular/core';
import { fadeUp } from '../../animations/fade-up.animation';
import { AnimationOnScrollDirective } from '../../directives/animation-on-scroll.directive';
import { AnimationStates } from '../../interface/animation-states';
import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DomSanitizer } from '@angular/platform-browser';
import { zoomIn } from '../../animations/zoom-in.animation';
import { ScrollService } from '../../services/scroll/scroll.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AnimationOnScrollDirective,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    fadeUp(),
    zoomIn()
  ]
})
export class HomeComponent implements OnInit {
  public animationStates: AnimationStates = {};
  public displayedText: string = '';
  public fullTexts: string[] = ["I'm a developer", "I'm a designer"];
  public textIndex: number = 0;
  public charIndex: number = 0;
  public typing: boolean = true;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private scrollService: ScrollService
  ) {
    this.matIconRegistry.addSvgIcon('facebook', 
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/facebook/facebook-brands.svg')
    ); 
    
    this.matIconRegistry.addSvgIcon('instagram', 
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/instagram/instagram-brands.svg')
    );

    this.matIconRegistry.addSvgIcon('linkedin', 
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin/linkedin-brands.svg')
    ); 
    
    this.matIconRegistry.addSvgIcon('arrow-right', 
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/arrow-right/arrow-right-solid.svg')
    );
  }

  public ngOnInit(): void {
    this.startTypingEffect();
  }


  public startTypingEffect(): void {
    setInterval(() => {
      const FULLTEXT = this.fullTexts[this.textIndex];
      if(this.typing) {
        if (this.charIndex < FULLTEXT.length) {
          this.displayedText += FULLTEXT[this.charIndex++];
        } 
        else {
          this.typing = false;
          setTimeout(() => {}, 1000);
        }
      } else {
        if (this.charIndex > 8) {
          this.displayedText = this.displayedText.slice(0, --this.charIndex);
        } else {
          this.typing = true;
          this.textIndex = (this.textIndex + 1) % this.fullTexts.length;
        }
      }
    }
    , 120);
  }

  public onVisibilityChange(id: string, isVisible: boolean): void { 
    if (isVisible) {
      setTimeout(() => {
        this.animationStates[id] = 'visible';
      }, 100);
    }
  }

  public scrollTo(targetId: string): void {
    this.scrollService.scrollTo(targetId);
  }
}
