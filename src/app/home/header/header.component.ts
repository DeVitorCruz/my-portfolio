import { Component, HostListener, OnInit, Inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconButton } from '@angular/material/button';
import { NgClass, NgIf } from '@angular/common';
import { WINDOW } from './constants/window.constant';
import { ScrollService } from '../main/services/scroll/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    MatToolbarModule,
    MatButtonModule,
    MatIconButton,
    MatIconModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  public isMobile: boolean = false;
  public isMobileMenuOpen: boolean = false;
  public isScrolled: boolean = false;
  public currentSection: string = 'home';

  constructor(
    private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, 
    @Inject(WINDOW) private windowRef: Window | undefined,
    private scrollService: ScrollService
  ) {
    this.matIconRegistry.addSvgIcon('d', 
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/d/d-solid.svg')
    );
  }

  @HostListener('window:scroll', []) onWindowScroll(): void {
    if (this.windowRef) {
      const SCROLLTOP: number = this.windowRef.scrollY || document.documentElement.scrollTop;
      this.isScrolled = SCROLLTOP > 50;
    }
  }

  public ngOnInit(): void {
   if (this.windowRef) {
     this.checkScreenSize();
     this.windowRef.addEventListener('scroll', this.onScroll.bind(this));
   }
  }

  @HostListener('window:resize') onResize(): void {
    this.checkScreenSize();
  }

  public checkScreenSize(): void {
    if(this.windowRef) {
      this.isMobile = this.windowRef.innerWidth < 991;
  
      if (!this.isMobile) {
        this.isMobileMenuOpen = false;
      }
    }
  }

  public toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  public closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  public scrollTo(targetId: string): void {
    this.scrollService.scrollTo(targetId);
  }

  public onScroll(): void {
    const SECTION: string[] = ['home', 'about', 'projects', 'services', 'contact'];
    
    for (let section of SECTION) {
      let el = document.getElementById(section);
      if (el) {
        let rect = el.getBoundingClientRect();
        if (rect.top <= 105.594 && rect.bottom >= 105.594) {
          this.currentSection = section;
          break;
        }
      } 
    }
  }
}
