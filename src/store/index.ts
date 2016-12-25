import { AppState, rootReducer } from './store';
import { CounterRecord } from './counter';

import createLogger from 'redux-logger';
import persistState from 'redux-localstorage';

export {
  AppState,
  CounterRecord,
  rootReducer
};

export let middleware = [];
export let enhancers = [
  persistState(
    '',
    {
      key: 'ionic2-redux-starter',
      serialize: store => JSON.stringify(store),
      deserialize: state => JSON.parse(state),
    })
];

if (true) {
  middleware.push(
    createLogger({
    level: 'info',
    collapsed: true
  }));

  const environment: any = window || this;
  if (environment.devToolsExtension) {
    enhancers.push(environment.devToolsExtension());
  }
}
