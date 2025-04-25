import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { fade } from '../../animations/fade.animation';
import { AnimationStates } from '../../interface/animation-states';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AnimationOnScrollDirective } from '../../directives/animation-on-scroll.directive';

@Component({
  selector: 'app-brand-bar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    AnimationOnScrollDirective
  ],
  templateUrl: './brand-bar.component.html',
  styleUrl: './brand-bar.component.scss',
  animations: [
    fade()
  ]
})
export class BrandBarComponent {
  public animationStates: AnimationStates = {};

  constructor(
    private matIconRegistry: MatIconRegistry, 
    private domSanitizer: DomSanitizer,
  ) {
    this.matIconRegistry.addSvgIcon('wordpress-brands', 
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/logo/wordpress-brands.svg')
    );
  }
}
