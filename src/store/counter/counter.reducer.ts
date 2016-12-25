import { Action } from 'redux';
import { CounterActions } from '../../actions/counter.actions';
import { INITIAL_STATE } from './counter.initial-state';
import { CounterRecord } from './counter.types';
import R from 'ramda';

export function counterReducer(
  state: CounterRecord = INITIAL_STATE,
  action: Action): CounterRecord {
  switch (action.type) {
    case CounterActions.INCREMENT_COUNTER:
      return R.set(R.lensProp('counter'), R.prop('counter', state) + 1, state);
    case CounterActions.DECREMENT_COUNTER:
      return R.set(R.lensProp('counter'), R.prop('counter', state) - 1, state);
    default:
      return state;
  }
}
