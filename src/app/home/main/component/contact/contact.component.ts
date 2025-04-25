import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AnimationOnScrollDirective } from '../../directives/animation-on-scroll.directive';
import { AnimationStates } from '../../interface/animation-states';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { fadeLeft } from '../../animations/fade-left.animation';
import { fadeUp } from '../../animations/fade-up.animation';
import { zoomIn } from '../../animations/zoom-in.animation';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    MatCardModule,
    AnimationOnScrollDirective,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [
    fadeLeft(),
    fadeUp(),
    zoomIn()
  ]
})
export class ContactComponent {
  public animationStates: AnimationStates = {};

  constructor (
    private matIconRegistry: MatIconRegistry, 
    private domSanitizer: DomSanitizer,
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
  }
}
