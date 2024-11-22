import { Component } from '@angular/core';

@Component({
  selector: 'c-card-header-actions, [c-card-header-actions]',
  template: '<ng-content />',
  host: { class: 'card-header-actions' }
})
export class CardHeaderActionsComponent {}
