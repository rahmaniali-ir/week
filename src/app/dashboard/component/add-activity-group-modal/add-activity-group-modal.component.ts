import { Component } from '@angular/core';
import { ActiveModal } from '@rahmaniali.ir/angular-modal';
import { standardColors } from 'src/app/core/component/color-picker/standard-colors';
import { ActivityService } from '../../service/activity.service';

@Component({
  selector: 'add-activity-group-modal',
  templateUrl: './add-activity-group-modal.component.html',
  styleUrls: ['./add-activity-group-modal.component.sass'],
})
export class AddActivityGroupModalComponent {
  name = '';
  color = standardColors[0];

  constructor(public modal: ActiveModal, private activity: ActivityService) {}

  addGroup() {
    this.activity.createGroup(this.name, this.color).subscribe({
      next: () => {
        this.modal.close();
      },
    });
  }
}
