import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { MATERIAL_MODULES } from './platform/angular2-material';

import { routing } from './app.routing';

import { HttpService } from './http/http.service';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { UserAuthService } from './auth/user-auth.service';
import { LogService } from './log/log.service';

import { AppComponent } from './app.component';
import { AppLoggedComponent } from './app-logged/app-logged.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ...MATERIAL_MODULES,
    routing,
  ],
  declarations: [
    AppComponent,
    AppLoggedComponent,
    DashboardComponent,
    PageNotFoundComponent,
    LoginComponent,
  ],
  providers: [
    HttpService,
    AuthService,
    AuthGuardService,
    UserAuthService,
    LogService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }