import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { AppState } from '../store';

@Injectable()
export class CounterActions {
  static INCREMENT_COUNTER = 'INCREMENT_COUNTER';
  static DECREMENT_COUNTER = 'DECREMENT_COUNTER';

  constructor(private ngRedux: NgRedux<AppState>) {}

  increment() {
    this.ngRedux.dispatch({ type: CounterActions.INCREMENT_COUNTER });
  }

  decrement() {
    this.ngRedux.dispatch({ type: CounterActions.DECREMENT_COUNTER });
  }
}
