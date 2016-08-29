import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  checkHealth(): Promise<string> {
    return this.http.get(`${API_URL}/api/health-check`)
      .toPromise()
      .then(response => response.text() as string);
  }
}
