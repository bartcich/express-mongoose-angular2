// For vendors for example jQuery, Lodash, angular2-jwt just import them here unless you plan on
// chunking vendors files for async loading. You would need to import the async loaded vendors
// at the entry point of the async loaded file. Also see custom-typings.d.ts as you also need to
// run `typings install x` where `x` is your module

// TODO(gdi2290): switch to DLLs

// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/forms';
import '@angular/http';
import '@angular/router';

// AngularClass
import '@angularclass/hmr';

// RxJS
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import '@angular2-material/core';
import '@angular2-material/button';
import '@angular2-material/card';
import '@angular2-material/checkbox';
import '@angular2-material/icon';
import '@angular2-material/input';
import '@angular2-material/list';
import '@angular2-material/menu';
import '@angular2-material/progress-bar';
import '@angular2-material/progress-circle';
import '@angular2-material/radio';
import '@angular2-material/sidenav';
import '@angular2-material/toolbar';
import '@angular2-material/tooltip';

// Other vendors for example jQuery, Lodash or Bootstrap
// You can import js, ts, css, sass, ...

import '../../node_modules/@angular2-material/core/style/core.css';
import '../../node_modules/@angular2-material/core/overlay/overlay.css';

if ('production' === ENV) {
  // Production


} else {
  // Development

}