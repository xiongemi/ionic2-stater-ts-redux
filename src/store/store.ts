import { combineReducers } from 'redux';
import * as counter from './counter';

export interface IAppState {
  counter?: counter.ICounter
};

export const rootReducer = combineReducers<IAppState>({
  counter: counter.counterReducer
});

export function deimmutify(store) {
  return {
    counter: store.counter.toJS()
  };
}

export function reimmutify(plain): {[key: string]: any}  {
  return {
    counter: counter.CounterFactory(plain.counter)
  };
}
