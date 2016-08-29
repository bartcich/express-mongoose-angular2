import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { AppSettings } from '../app.settings';

import { LogLevel } from './log-level';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LogService {

  constructor(private http: Http) { }

  public error(message: string) {
    this.logMessage(LogLevel.ERROR, message);
  }

  public warn(message: string) {
    this.logMessage(LogLevel.WARN, message);
  }

  public info(message: string) {
    this.logMessage(LogLevel.INFO, message);
  }

  public debug(message: string) {
    this.logMessage(LogLevel.DEBUG, message);
  }

  public log(message: string) {
    this.logMessage(LogLevel.LOG, message);
  }

  logMessage(level: LogLevel, message: string) {
    if (level <= AppSettings.consoleErrorLevel) {
      ( <any> console )[this.consoleLevel(level)].apply(console, [message]);
    }

    this.sendLog(level, message);
  }

  sendLog(level: LogLevel, message: string) {
    if (level <= AppSettings.serverErrorLevel) {
      const body = {
        level: this.serverLevel(level),
        content: {
          message: message,
        }
      };
      this.http.post(`${API_URL}/api/logger`,
        JSON.stringify(body),
        {headers: new Headers({'Content-Type': 'application/json'})}
      ).toPromise()
      .then(() => null);
    }
  }

  consoleLevel(level: LogLevel): string {
    switch (level) {
      case LogLevel.ERROR: return 'error';
      case LogLevel.WARN: return 'warn';
      case LogLevel.INFO: return 'info';
      case LogLevel.DEBUG: return console['debug'] ? 'debug' : 'log';
      case LogLevel.LOG: return 'log';

      default: return 'log';
    }
  }

  serverLevel(level: LogLevel): string {
      switch (level) {
      case LogLevel.ERROR: return 'error';
      case LogLevel.WARN: return 'warn';
      case LogLevel.INFO: return 'info';
      case LogLevel.DEBUG: return 'debug';
      case LogLevel.LOG: return 'silly';

      default: return 'log';
    }
  }
}
