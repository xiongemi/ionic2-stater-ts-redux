import { IAppState, rootReducer, deimmutify, reimmutify } from './store';
import { ICounter } from './counter';
import { ISession } from './session';

import createLogger from 'redux-logger';
import persistState from 'redux-localstorage';

export {
  IAppState,
  ICounter,
  ISession,
  rootReducer,
  reimmutify
};

export let middleware = [];
export let enhancers = [
  persistState(
    '',
    {
      key: 'ionic2-redux-starter',
      serialize: store => JSON.stringify(deimmutify(store)),
      deserialize: state => reimmutify(JSON.parse(state)),
    })
];

if (true) {
  middleware.push(
    createLogger({
    level: 'info',
    collapsed: true,
    stateTransformer: deimmutify,
  }));

  const environment: any = window || this;
  if (environment.devToolsExtension) {
    enhancers.push(environment.devToolsExtension());
  }
}
