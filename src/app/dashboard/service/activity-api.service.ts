import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/service/api.service';
import { ActivityGroup } from '../type/activity';

@Injectable({
  providedIn: 'root',
})
export class ActivityApiService {
  constructor(private api: ApiService) {}

  fetchGroups() {
    return this.api.get<ActivityGroup[]>('groups');
  }

  createGroup(name: string, color: string) {
    return this.api.post<ActivityGroup>('group', { name, color });
  }

  deleteGroup(id: string) {
    return this.api.delete('group', { params: { id } });
  }
}
