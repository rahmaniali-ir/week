import { Component, Input } from '@angular/core';
import { IconName } from '../i-con/icons';

@Component({
  selector: 'message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.sass'],
})
export class MessageBoxComponent {
  @Input() icon?: IconName;
  @Input() message = '';
}
