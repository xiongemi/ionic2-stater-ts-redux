import { Action } from 'redux';
import { CounterActions } from './counter.actions';

export interface IPayloadAction extends Action {
  payload?: any;
}

export const ACTION_PROVIDERS = [ CounterActions ];
export { CounterActions };
