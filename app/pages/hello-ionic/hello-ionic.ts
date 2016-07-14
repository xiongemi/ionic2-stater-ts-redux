import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { CounterActions } from '../../actions/counter';

@Component({
  templateUrl: './build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
  @select('counter') counter$: Observable<number>;

  constructor(private actions: CounterActions) {}
}
