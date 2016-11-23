import {
  ISessionRecord,
  ISession,
  IUser,
  IUserRecord,
} from './session.types';
import { makeTypedFactory } from 'typed-immutable-record';


export const UserFactory = makeTypedFactory<IUser, IUserRecord>({
  id: null,
  name: null,
  education: []
});

export const INITIAL_USER_STATE = UserFactory();

export const SessionFactory = makeTypedFactory<ISession, ISessionRecord>({
  token: null,
  user: INITIAL_USER_STATE,
  hasError: false,
  isLoading: false,
});

export const INITIAL_STATE = SessionFactory();
