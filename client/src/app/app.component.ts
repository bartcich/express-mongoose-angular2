import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [
    require('../../../node_modules/@angular2-material/core/style/core.css'),
    require('../../../node_modules/@angular2-material/core/overlay/overlay.css'),
    require('./app.component.scss'),
    require('../sass/main.scss')
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  protected val = 'asfasdf';
  protected status = '';

  constructor(private auth: AuthService) { }

  checkHealth(): void {
    this.auth.checkHealth().then(status => this.status = status);
  }
 }