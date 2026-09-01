// src/app/directives/click-counter.directive.ts
import { Directive, HostListener, signal } from '@angular/core';

@Directive({
  selector: '[appClickCounter]',
  standalone: true
})
export class ClickCounter {
  // El estado vive dentro de la propia directiva, como un signal privado
  count = signal(0);

  @HostListener('click') onClick() {
    this.count.update((v) => v + 1);
    console.log('Clicks en este botón:', this.count());
  }
}