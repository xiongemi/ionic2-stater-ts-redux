import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';
import { FACEBOOK_PERMISSIONS } from '../constants';

declare const facebookConnectPlugin: any;

@Injectable()
export class SessionActions {
  static LOGIN_USER_PENDING = 'LOGIN_USER_PENDING';
  static LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
  static LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
  static LOGOUT_USER = 'LOGOUT_USER';

  constructor(private ngRedux: NgRedux<IAppState>) {}

  loginUser() {
    this.ngRedux.dispatch({type: SessionActions.LOGIN_USER_PENDING});
    facebookConnectPlugin.login(FACEBOOK_PERMISSIONS, () => {
      this.ngRedux.dispatch({type: SessionActions.LOGIN_USER_SUCCESS});
    }, () => {
      this.ngRedux.dispatch({type: SessionActions.LOGIN_USER_ERROR});
    });
  };

  logoutUser() {
    this.ngRedux.dispatch({ type: SessionActions.LOGOUT_USER });
  };
}
