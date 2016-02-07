import {Page} from 'ionic-framework/ionic';
import {Inject} from 'angular2/core';
import {bindActionCreators} from 'redux';
import * as CounterActions from '../../actions/counter';


@Page({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html',
  inputs: [
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ]
})
export class HelloIonicPage {
  protected unsubscribe: Function;

  constructor( @Inject('ngRedux') private ngRedux) {}

  ngOnInit() {
    this.unsubscribe = this.ngRedux.connect(
    this.mapStateToThis,
    this.mapDispatchToThis)(this);
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  mapStateToThis(state) {
    return {
      counter: state.counter
    };
  }

  mapDispatchToThis(dispatch) {
    return bindActionCreators(CounterActions, dispatch);
  }
}
