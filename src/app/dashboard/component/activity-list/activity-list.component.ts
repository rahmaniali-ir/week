import { Component } from '@angular/core';
import { ActivityService } from '../../service/activity.service';
import { ModalService } from '@rahmaniali.ir/angular-modal';
import { AddActivityGroupModalComponent } from '../add-activity-group-modal/add-activity-group-modal.component';

@Component({
  selector: 'activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.sass'],
})
export class ActivityListComponent {
  groupName = '';
  groupColor = '';

  constructor(private activity: ActivityService, private modal: ModalService) {
    this.activity.fetchGroups().subscribe();
  }

  get groups() {
    return this.activity.groups;
  }

  get groupCount() {
    return this.groups.length;
  }

  clearAddGroupForm() {
    this.groupName = '';
    this.groupColor = '';
  }

  addGroup() {
    this.modal.open(AddActivityGroupModalComponent);
  }
}
