'use strict';

/**
 * GENERAL SHIM STUFF......
 */
require('core-js');
require('reflect-metadata');

// shim for required for IE + Chrome for Android
// taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc
Math.trunc = Math.trunc || function(x) {
  return x < 0 ? Math.ceil(x) : Math.floor(x);
}

// these 2 requires are required for currency pipe to work in Safari; #safariIsTheNewIE
require('intl');
require('intl/locale-data/jsonp/en.js');
// safari 9 does not support <picture>
require('picturefill');
require('picturefill/dist/plugins/mutation/pf.mutation.js');
require('zone.js/dist/zone');
