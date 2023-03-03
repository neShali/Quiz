import User from './types/User';
import LoginAction from './types/LoginAction';

export const userChecked = (user: User | undefined): LoginAction => ({
  type: 'login/userChecked',
  payload: user,
});

export const loginSuccess = (user: User): LoginAction => ({
  type: 'login/loginSuccess',
  payload: user,
});

export const logoutSuccess = (): LoginAction => ({ type: 'login/logout' });