// src/app/directives/enlarge-on-hover.directive.ts
import { Directive, ElementRef, HostListener, inject } from '@angular/core';


@Directive({
  selector: '[appEnlargeOnHover]',
  standalone: true
})
export class EnlargeOnHover {
  private el = inject(ElementRef);

  @HostListener('mouseenter') onEnter() {
    this.el.nativeElement.style.fontSize = '1.3em';
    this.el.nativeElement.style.transition = 'font-size 0.2s ease';
  }

  @HostListener('mouseleave') onLeave() {
    this.el.nativeElement.style.fontSize = '';
  }
}