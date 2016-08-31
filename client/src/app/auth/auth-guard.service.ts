import { Injectable } from '@angular/core';
import { CanActivate, Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }    from '@angular/router';

import { AuthService } from './auth.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return new Promise(
      (resolve: (response: any) => void, reject: (error: any) => void) => {
        this.auth.isAuth().then(isAuth => {
          if (isAuth) {
            resolve(true);
          } else {
            resolve(false);
            this.auth.redirectUrl = state.url;

            this.router.navigate(['/login']);

          }
        });
      });
  }
}
