import { Component, Input } from '@angular/core';
import { ModalRef } from '@rahmaniali.ir/angular-modal/modal/model/modalRef';
import { IconName } from '../i-con/icons';

@Component({
  selector: 'modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.sass'],
})
export class ModalCardComponent {
  @Input() modal?: ModalRef;
  @Input() icon?: IconName;
  @Input() iconColor = '';
  @Input() header = '';

  dismiss() {
    this.modal?.dismiss();
  }
}
