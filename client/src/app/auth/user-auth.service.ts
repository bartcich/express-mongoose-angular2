import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { HttpService } from '../http/http.service';

import { Credentials } from './credentials.model';

@Injectable()
export class UserAuthService {

  constructor(private auth: AuthService, private http: HttpService) { }

  login(credentials: Credentials) {
    return this.http.post('/api/auth/login', credentials)
      .toPromise()
      .then(data => {
        this.auth.setToken(data.token);
      });
  }
}