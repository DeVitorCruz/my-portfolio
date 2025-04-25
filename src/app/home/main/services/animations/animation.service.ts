import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  public onVisiblityChange(
    animationState: Record<string, string>,
    key: string
  ): void {

    setTimeout(() => {
      animationState[key] = 'visible';
    }, 100);
  }
}
