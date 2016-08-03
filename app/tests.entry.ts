require('core-js');
require('zone.js');
require('zone.js/dist/async-test.js');
require('zone.js/dist/fake-async-test.js');
require('reflect-metadata');

import {setBaseTestProviders} from '@angular/core/testing';

import {
  TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
  TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
} from '@angular/platform-browser-dynamic/testing';

setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
  TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

let testContext = (<{ context?: Function }>require).context(
  './',
  true,
  /\.spec\.ts/);

testContext.keys().forEach(key => {
  testContext(key);
});
