import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getApiEndpoint } from '../utils/api';
import { HTTPOptions } from '../type/api';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get<T = any>(endpoint: string, options?: HTTPOptions) {
    return this.http.get<T>(getApiEndpoint(endpoint), options);
  }

  post<T = any>(endpoint: string, body: any, options?: HTTPOptions) {
    return this.http.post<T>(getApiEndpoint(endpoint), body, options);
  }

  delete<T = any>(endpoint: string, options?: HTTPOptions) {
    return this.http.delete<T>(getApiEndpoint(endpoint), options);
  }
}
