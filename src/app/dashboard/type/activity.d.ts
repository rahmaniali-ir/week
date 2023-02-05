export interface ActivityGroup {
  id: string;
  name: string;
  color: string;
}

export interface Activity {
  id: string;
  groupId: string;
  name: string;
}
