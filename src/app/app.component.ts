import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';

import { middleware, enhancers } from '../store';
import { NgRedux } from 'ng2-redux';
import { AppState, rootReducer } from '../store';

import { AD_MOB_ID } from '../constants';
declare const AdMob: any;
declare const adsbygoogle: any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform, private ngRedux: NgRedux<AppState>) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      ngRedux.configureStore(rootReducer, {}, middleware, enhancers);

      // need to add this timeout to show the ad
      setTimeout(() => {
        if (platform.is('ios') || platform.is('android')) {
          AdMob.createBanner({
            adId: AD_MOB_ID[platform.is('ios') ? 'ios' : 'android'],
            position: AdMob.AD_POSITION.BOTTOM_CENTER,
            autoShow: true
          });
        } else {
          adsbygoogle.push({});
        }
      }, 0);
    });
  }
}
