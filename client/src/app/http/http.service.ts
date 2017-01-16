import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { LogService } from '../log/log.service';
import { AuthService } from '../auth/auth.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

  private noAuthUrls = ['/api/auth/login', '/api/health-check'];

  constructor(private http: Http, private auth: AuthService, private log: LogService) { }

  get(url: string): Observable<any> {

    return Observable.fromPromise(this.getHeaders(url, false))
      .flatMap(headers => {

        return this.http.get(`${environment.API_URL}${url}`, { headers: headers })
          .map(this.extractData)
          .catch((error) =>
            this.errorHandler(error)
          );
      });
  }

  post(url: string, body: any): Observable<any> {
    return Observable.fromPromise(this.getHeaders(url, true))
      .flatMap(headers => {

        return this.http.post(`${environment.API_URL}${url}`, JSON.stringify(body), { headers: headers })
          .map(this.extractData)
          .catch((error) =>
            this.errorHandler(error)
          );
      });
  }

  put(url: string, body: any): Observable<any> {
    return Observable.fromPromise(this.getHeaders(url, true))
      .flatMap(headers => {

        return this.http.put(`${environment.API_URL}${url}`, JSON.stringify(body), { headers: headers })
          .map(this.extractData)
          .catch((error) =>
            this.errorHandler(error)
          );
      });
  }

  delete(url: string): Observable<any> {
    return Observable.fromPromise(this.getHeaders(url, false))
      .flatMap(headers => {

        return this.http.delete(`${environment.API_URL}${url}`, { headers: headers })
          .map(this.extractData)
          .catch((error) =>
            this.errorHandler(error)
          );
      });
  }

  private extractData(res: Response) {
    if (res.headers.get('Content-Type').indexOf('application/json') < 0) {
      return res;
    }
    let body = res.json();
    return body || {};
  }

  private getHeaders(url: string, addContentType: boolean = false) {
    let headers = new Headers();

    if (addContentType) {
      headers.append('Content-Type', 'application/json');
    }

    return new Promise(
      (resolve: (response: any) => void, reject: (error: any) => void) => {
        if (this.noAuthUrls.indexOf(url) < 0) {
          this.auth.getToken()
            .then(token => {
              headers.append('Authorization', `Bearer ${token}`);
              resolve(headers);
            })
            .catch(err => {
              reject(err);
            });
        } else {
          resolve(new Headers(headers));
        }
      }
    );
  }

  private errorHandler(error: any) {
    this.log.error(error);
    return Observable.throw(error);
  }
}
