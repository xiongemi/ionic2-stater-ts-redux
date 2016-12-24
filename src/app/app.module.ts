import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { Components } from '../components';

import { NgRedux } from 'ng2-redux';
import { AppState } from '../store';

export function ngReduxFactory() {
    return new NgRedux<AppState>();
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ...Components
  ],
  imports: [
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    { provide: NgRedux, useFactory: ngReduxFactory }
  ]
})
export class AppModule {}
