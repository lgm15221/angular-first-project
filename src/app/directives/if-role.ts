// src/app/directives/if-role.directive.ts
import { Directive, Input, TemplateRef, ViewContainerRef, inject } from '@angular/core';


@Directive({
  selector: '[appIfRole]',
  standalone: true
})
export class IfRole {
  private templateRef = inject(TemplateRef<unknown>);
  private viewContainer = inject(ViewContainerRef);

  private currentRole = '';
  private requiredRole = '';
  private hasView = false;

  // El nombre del @Input DEBE coincidir con el selector de la directiva
  // para poder usar la sintaxis con asterisco: *appIfRole="'admin'"
  @Input() set appIfRole(role: string) {
    this.requiredRole = role;
    this.updateView();
  }

  // Segundo input: el rol actual del usuario a comparar.
  // Se pasa así: *appIfRole="'admin'; role: userRole"
  @Input() set appIfRoleRole(role: string) {
    this.currentRole = role;
    this.updateView();
  }

  private updateView() {
    const shouldShow = this.currentRole === this.requiredRole;

    if (shouldShow && !this.hasView) {
      // Inserta el contenido del template en el DOM
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!shouldShow && this.hasView) {
      // Lo quita completamente del DOM (no solo lo oculta con CSS)
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}