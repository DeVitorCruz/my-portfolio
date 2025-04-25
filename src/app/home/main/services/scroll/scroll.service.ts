import { Injectable, Inject } from '@angular/core';
import { WINDOW } from '../../../header/constants/window.constant';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(@Inject(WINDOW) private windowRef: Window | undefined){}

  public scrollTo(targetId: string): void {
    const element = document.getElementById(targetId);
    const headerOffset = document.querySelector('mat-toolbar')?.clientHeight || 0;

    if (element && this.windowRef) {
      const elementPosition = element.getBoundingClientRect().top + this.windowRef.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      this.windowRef.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
