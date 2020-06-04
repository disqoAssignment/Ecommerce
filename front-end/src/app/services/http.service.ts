import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {



  constructor(private http: HttpClient) {}

  get(params: {url: string, headers?: HttpHeaders}): Observable<any> {
    params.headers = params.headers || new HttpHeaders();
    return this.http.get(`${environment.api_url}${params.url}`, {headers: params.headers});
  }

  post(params: {url: string, body: any, headers?: HttpHeaders}): Observable<any> {
    params.headers = params.headers || new HttpHeaders();
    return this.http.post(`${environment.api_url}${params.url}`, params.body,{headers: params.headers});
  }
}
