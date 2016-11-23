import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ICounter, ISession } from '../../store';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { select } from 'ng2-redux';
import { CounterActions, SessionActions } from '../../actions';

@Component({
  selector: 'page-home',
  providers: [ AsyncPipe, CounterActions, SessionActions ],
  templateUrl: 'home.html'
})
export class HomePage {
  @select() counter$: Observable<ICounter>;
  @select() session$: Observable<ISession>;

  constructor(public navCtrl: NavController,
    public counterActions: CounterActions, // has to make the variable public
    public sessionActions: SessionActions) {
  }

}
