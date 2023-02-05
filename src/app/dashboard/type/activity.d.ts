export interface ActivityGroup {
  id: string;
  name: string;
  color: string;
  activities: Activity[];
}

export interface Activity {
  id: string;
  groupId: string;
  name: string;
}
