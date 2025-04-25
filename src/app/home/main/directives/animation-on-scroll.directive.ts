import { Directive, ElementRef, EventEmitter, Output, Input, OnDestroy, OnInit } from '@angular/core';
import { AnimationService } from '../services/animations/animation.service';


@Directive({
  selector: '[appAnimationOnScrollDirective]',
  standalone: true
})
export class AnimationOnScrollDirective implements OnInit, OnDestroy {
  
  @Input() public animationStates!: Record<string, string>;
  @Input() public animationKey!: string;

  private observer!: IntersectionObserver;

  constructor(
    private el: ElementRef,
    private animationService: AnimationService
  ) { }

  public ngOnInit(): void {
    this.setupObserver();
  }

  private setupObserver(): void {
    this.observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          this.animationService.onVisiblityChange(
            this.animationStates,
            this.animationKey
          );
          this.observer.unobserve(this.el.nativeElement);  
        }
      }, 
      { threshold: 0.1 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  public ngOnDestroy(): void {
    if(this.observer) {
      this.observer.disconnect();
    }
  }
}
