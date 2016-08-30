import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { MATERIAL_MODULES } from './platform/angular2-material';

import { routing } from './app.routing';

import { AuthService } from './auth/auth.service';
import { LogService } from './log/log.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    DashboardComponent,
    PageNotFoundComponent,
  ],
  providers: [
    AuthService,
    LogService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }