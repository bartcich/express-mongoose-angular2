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

@Component({
  selector: 'app-logged',
  templateUrl: 'app-logged.component.html',
  animations: [
    trigger('fadeIn', [
      state('in', style({transform: 'translateY(0)'})),
      transition('void => *', [
        style({ opacity: 0}),
        animate('900ms ease-in-out')
      ])
    ])
  ]
})
export class AppLoggedComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}