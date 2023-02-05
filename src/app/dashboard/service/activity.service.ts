import { Injectable } from '@angular/core';
import { Activity, ActivityGroup } from '../type/activity';
import { ActivityApiService } from './activity-api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  groups: ActivityGroup[] = [];
  activities: Activity[] = [
    {
      id: '3e87bcb2-d7f6-4e54-980a-bc0043cb3361',
      groupId: '3e87bcb2-d7f6-4e54-980a-bc0043cb3361',
      name: 'Activity',
    },
    {
      id: '3e87bcb2-d7f6-4e54-980a-bc0043cb3361',
      groupId: '3e87bcb2-d7f6-4e54-980a-bc0043cb3361',
      name: 'Activity 2',
    },
    {
      id: '3e87bcb2-d7f6-4e54-980a-bc0043cb3361',
      groupId: '3e87bcb2-d7f6-4e54-980a-bc0043cb3361',
      name: 'Activity 3',
    },
  ];

  constructor(private activityApi: ActivityApiService) {}

  // activity group
  fetchGroups() {
    const obs = this.activityApi.fetchGroups();

    obs.subscribe({
      next: (groups) => {
        this.groups = groups;
      },
    });

    return obs;
  }

  getFilledActivityGroups() {
    return this.groups.map((group) => {
      return { ...group, activities: this.getGroupActivities(group.id) };
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

  // activity
  getGroupActivities(groupId: string) {
    return this.activities.filter((activity) => activity.groupId === groupId);
  }

  createActivity(name: string) {
    const obs = this.activityApi.createActivity(name);

    obs.subscribe((activity) => {
      this.activities.push(activity);
    });

    return obs;
  }
}
