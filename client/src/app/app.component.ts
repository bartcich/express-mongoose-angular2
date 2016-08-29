import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.scss', '../sass/main.scss'],
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
 }