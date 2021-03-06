import { Component, ViewEncapsulation } from '@angular/core';

import { AuthService } from './auth/auth.service';
import { LogService } from './log/log.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [
    '../../../node_modules/@angular/material/core/theming/prebuilt/indigo-pink.css',
    './app.component.scss',
    '../sass/main.scss'
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  constructor(private auth: AuthService, private logger: LogService) { }

 }
