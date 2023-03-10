import { Component, Input } from '@angular/core';
import { ActivityGroup } from '../../type/activity';
import { ActivityService } from '../../service/activity.service';

@Component({
  selector: 'activity-group',
  templateUrl: './activity-group.component.html',
  styleUrls: ['./activity-group.component.sass'],
})
export class ActivityGroupComponent {
  @Input() group: ActivityGroup = {
    id: '',
    name: '',
    color: '',
  };
  constructor(private activity: ActivityService) {}

  deleteGroup() {
    this.activity.deleteGroup(this.group.id);
  }
}
