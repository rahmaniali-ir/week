export interface Button<T = any> {
  name: string;
  body?: string;
  title?: string;
  data?: T;
}
