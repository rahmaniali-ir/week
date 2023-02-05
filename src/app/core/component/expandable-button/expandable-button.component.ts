import { Component, Input } from '@angular/core';
import { Button } from '../../type/button';

@Component({
  selector: 'expandable-button',
  templateUrl: './expandable-button.component.html',
  styleUrls: ['./expandable-button.component.sass'],
})
export class ExpandableButtonComponent {
  @Input() header: Button = { name: '' };
  @Input() children: Button[] = [];
  @Input() open = false;

  toggle() {
    this.open = !this.open;
  }
}
