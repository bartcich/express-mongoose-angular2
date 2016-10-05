import {
  TestBed,
  inject
} from '@angular/core/testing';

import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
// Load the implementations that should be tested
import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { LogService } from './log/log.service';

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule([
    BaseRequestOptions,
    MockBackend,
    {
      provide: Http,
      useFactory: function(backend, defaultOptions) {
        return new Http(backend, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]
    },

    AppComponent,
    AuthService,
    LogService,
  ]));

});
