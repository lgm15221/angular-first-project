// src/app/directives/autofocus.ts
import { Directive, ElementRef, AfterViewInit, inject } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
  standalone: true
})
export class Autofocus implements AfterViewInit {
  private el = inject(ElementRef);

  // AfterViewInit se ejecuta cuando la vista ya está renderizada en el DOM,
  // que es el momento correcto para poder enfocar el elemento (antes no existiría aún).
  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }
}