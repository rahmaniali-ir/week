import { Component, Input } from '@angular/core';
import { Activity } from '../../type/activity';

@Component({
  selector: 'activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.sass'],
})
export class ActivityItemComponent {
  @Input() activity?: Activity;
}
