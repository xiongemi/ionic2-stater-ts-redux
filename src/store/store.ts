import { combineReducers } from 'redux';
import * as counter from './counter';

export class AppState {
  readonly counter?: counter.CounterRecord;
};

export const rootReducer = combineReducers<AppState>({
  counter: counter.counterReducer
});
