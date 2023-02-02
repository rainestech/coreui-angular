import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { NavItemComponent } from './nav-item.component';
import { NavLinkDirective } from './nav-link.directive';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavComponent,
    NavItemComponent,
    NavLinkDirective
  ],
  exports: [
    NavComponent,
    NavItemComponent,
    NavLinkDirective
  ]
})
export class NavModule {}
