import {
  Component,
  NgZone,
  ViewChild,
  AfterContentInit
} from '@angular/core';
import { NgRedux } from 'ng2-redux';
const createLogger = require('redux-logger');

import reducer from './reducers';
import {CounterActions} from './actions/counter';
import {App, ionicBootstrap, Platform, ActionSheet, MenuController, NavController, Menu} from 'ionic-angular';

import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';

@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  pages: Array<{title: string, component: any}>;
  rootPage: any;
  @ViewChild('content') content: NavController;

  constructor(private platform: Platform, private ngRedux: NgRedux<any>) {
    this.ngRedux.configureStore(
      reducer,
      {},
      [ createLogger() ]);

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage }
    ];
    this.rootPage = HelloIonicPage;
  }

  openPage(page) {
    this.content.setRoot(page.component);
  }
}

ionicBootstrap(MyApp, [NgRedux, CounterActions], {
  statusbarPadding: true,
  platforms: {
    android: {
      activator: 'ripple',
      backButtonIcon: 'md-arrow-back'
    }
  }
});
