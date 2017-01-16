import {
  Component,
  Input,
  trigger,
  state,
  style,
  animate,
  transition,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { UserAuthService } from '../auth/user-auth.service';

import { Credentials } from '../auth/credentials.model';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
  animations: [
    trigger('flyIn', [
      state('in', style({transform: 'translateY(0)'})),
      transition('void => *', [
        style({transform: 'translateY(-100%)', opacity: 0}),
        animate('900ms 200ms ease-in-out')
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {

  @Input()
  public credentials = new Credentials();

  private loginFailed = false;
  private queryInProgress = false;

  constructor(
    private auth: AuthService,
    private userAuth: UserAuthService,
    private router: Router) { }

  login() {
    this.loginFailed = false;
    this.queryInProgress = true;
    this.userAuth.login(this.credentials)
      .then(data => {
        this.queryInProgress = false;
        // if we've se redirect url
        if (this.auth.redirectUrl) {
          const url = this.auth.redirectUrl;
          this.auth.redirectUrl = null;
          this.router.navigate([url]);
          // if not - default redirect
        } else {
          this.router.navigate(['/dashboard']);
        }
      })
      .catch(res => {
        this.queryInProgress = false;
        console.log(res);
        if (res.status === 401) {
          this.loginFailed = true;
        }
      });
    // setTimeout(() => {this.auth.isAuth = true; this.router.navigate(['/dashboard'])}, 2000);
  }


  ngOnInit() { }
}
