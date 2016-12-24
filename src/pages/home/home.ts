import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CounterRecord } from '../../store';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { select } from 'ng2-redux';
import { CounterActions } from '../../actions';

@Component({
  selector: 'page-home',
  providers: [ AsyncPipe, CounterActions ],
  templateUrl: 'home.html'
})
export class HomePage {
  @select() counter$: Observable<CounterRecord>;

  constructor(public navCtrl: NavController,
    public actions: CounterActions) {
  }

}
