import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Router } from '@angular/router';

// Avoid TS error "cannot find name escape"
declare var escape: any;

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  public redirectUrl: string = null;

  private jwtHelper: JwtHelper = new JwtHelper();

  private _isAuth = false;
  get isAuthV(): boolean { return this._isAuth; }


  constructor(private http: Http, private router: Router) { }

  isAuth(): Promise<boolean> {
    return new Promise(
      (resolve: (response: any) => void, reject: (error: any) => void) => {
        this.getToken()
          .then(() => resolve(true))
          .catch(err => resolve(false));
      });
  }

  getToken(): Promise<string> {
    return new Promise(
      (resolve: (response: any) => void, reject: (error: any) => void) => {
        let token: string = localStorage.getItem('jwtToken');
        if (token && !this.jwtHelper.isTokenExpired(token)) {
           this._isAuth = true;
          resolve(token);
        } else {
          this._isAuth = false;

          this.redirectUrl = this.router.routerState.snapshot.url;
          this.router.navigate(['/login']);
          reject('not logged');
        }
      });
  }

  setToken(token: string) {
    this._isAuth = true;
    localStorage.setItem('jwtToken', token);
  }
}

export class JwtHelper {

  public urlBase64Decode(str: string): string {
    let output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch (output.length % 4) {
      case 0: { break; }
      case 2: { output += '=='; break; }
      case 3: { output += '='; break; }
      default: {
        throw 'Illegal base64url string!';
      }
    }

    return decodeURIComponent(
      escape(typeof window === 'undefined' ? atob(output) : window.atob(output)));
  }

  public decodeToken(token: string): any {
    let parts = token.split('.');

    if (parts.length !== 3) {
      throw new Error('JWT must have 3 parts');
    }

    let decoded = this.urlBase64Decode(parts[1]);
    if (!decoded) {
      throw new Error('Cannot decode the token');
    }

    return JSON.parse(decoded);
  }

  public getTokenExpirationDate(token: string): Date {
    let decoded: any;
    decoded = this.decodeToken(token);

    if (typeof decoded.exp === 'undefined') {
      return new Date(0);
    }

    let date = new Date(0); // The 0 here is the key, which sets the date to the epoch
    date.setUTCSeconds(decoded.exp);

    return date;
  }

  public isTokenExpired(token: string, offsetSeconds?: number): boolean {
    let date = this.getTokenExpirationDate(token);
    offsetSeconds = offsetSeconds || 0;

    // Token expired?
    return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
  }
}