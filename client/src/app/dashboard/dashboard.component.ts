import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http/http.service';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'dashbaord',
  template: `<md-card><h1>Dashboard</h1>
    <button md-button (click)="check();">click</button>
     Status: {{status}}
   </md-card>`
})
export class DashboardComponent implements OnInit {

  status = '';

  constructor(private auth: AuthService, private http: HttpService) { }



  ngOnInit() { }

  check() {
   /*this.http.get(`/api/health-check`)
      .toPromise()
      .then(response => response.text() as string).then(res => this.status = res).catch(() => this.status = 'err');*/

      this.http.get('/api/auth/random-number')
      .toPromise()
      .then(data => {
        this.status = data.num
      })
      .catch(err => {
        console.log(err);
      });
  }
}
