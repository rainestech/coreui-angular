import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';

import { ModalBodyComponent } from './modal-body/modal-body.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { ModalToggleDirective } from './modal-dismiss/modal-toggle.directive';
import { ModalFooterComponent } from './modal-footer/modal-footer.component';
import { ModalHeaderComponent } from './modal-header/modal-header.component';
import { ModalTitleDirective } from './modal-title/modal-title.directive';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal.service';

@NgModule({
  declarations: [],
  exports: [
    ModalBodyComponent,
    ModalComponent,
    ModalContentComponent,
    ModalDialogComponent,
    ModalFooterComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ModalToggleDirective
  ],
  imports: [
    CommonModule,
    A11yModule,
    ModalBodyComponent,
    ModalComponent,
    ModalContentComponent,
    ModalDialogComponent,
    ModalFooterComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ModalToggleDirective
  ],
  providers: [ModalService]
})
export class ModalModule {}
