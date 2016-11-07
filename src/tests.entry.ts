/// <reference path='../node_modules/@types/jasmine/index.d.ts' />
/// <reference path='../node_modules/@types/node/index.d.ts' />

import 'babel-polyfill';
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import 'zone.js/dist/proxy';
import 'zone.js/dist/jasmine-patch';

let testContext = (<{ context?: Function }>require).context(
  './',
  true,
  /\.spec\.ts/);

testContext.keys().forEach(key => {
  testContext(key);
});
