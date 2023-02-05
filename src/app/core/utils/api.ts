import { environment } from 'src/environments/environment';

export function getApiEndpoint(endpoint: string) {
  return `${environment.apiPath}/${endpoint}`;
}
