import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/service/api.service';
import { Activity, ActivityGroup } from '../type/activity';

@Injectable({
  providedIn: 'root',
})
export class ActivityApiService {
  constructor(private api: ApiService) {}

  // activity group
  fetchGroups() {
    return this.api.get<ActivityGroup[]>('groups');
  }

  createGroup(name: string, color: string) {
    return this.api.post<ActivityGroup>('group', { name, color });
  }

  deleteGroup(id: string) {
    return this.api.delete('group', { params: { id } });
  }

  // activity
  createActivity(name: string) {
    return this.api.post<Activity>('activity', { name });
  }
}
