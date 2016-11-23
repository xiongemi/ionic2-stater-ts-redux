import {
  Component,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class Login {
  @Output() login = new EventEmitter();
};
