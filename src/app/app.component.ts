import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';

import { middleware, enhancers } from '../store';
import { NgRedux } from 'ng2-redux';
import { IAppState, rootReducer } from '../store';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform, private ngRedux: NgRedux<IAppState>) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      ngRedux.configureStore(rootReducer, {}, middleware, enhancers);
    });
  }
}
