import { Injectable } from '@angular/core';
import { Activity, ActivityGroup } from '../type/activity';
import { ActivityApiService } from './activity-api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  groups: ActivityGroup[] = [];
  activities: Activity[] = [];

  constructor(private activityApi: ActivityApiService) {}

  fetchGroups() {
    this.activityApi.fetchGroups().subscribe({
      next: (groups) => {
        this.groups = groups;
      },
    });
  }

  createGroup(name: string, color: string) {
    const obs = this.activityApi.createGroup(name, color);

    obs.subscribe({
      next: (group) => {
        this.groups.push(group);
      },
    });

    return obs;
  }

  deleteGroup(id: string) {
    if (!id) return;

    this.activityApi.deleteGroup(id).subscribe({
      next: () => {
        this.groups = this.groups.filter((group) => group.id !== id);
      },
    });
  }
}
