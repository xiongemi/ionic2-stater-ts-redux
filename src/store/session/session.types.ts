import {TypedRecord} from 'typed-immutable-record';

export interface IUser {
  id: string;
  name: string;
  education: any
};

export interface IUserRecord extends TypedRecord<IUserRecord>, IUser {
};

export interface ISession {
  token: string;
  user: IUser;
  hasError: boolean;
  isLoading: boolean;
};

export interface ISessionRecord extends TypedRecord<ISessionRecord>,
  ISession {
};
