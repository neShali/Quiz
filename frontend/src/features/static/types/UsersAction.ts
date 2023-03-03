import type UsersType from './UsersType';

type UsersAction =
  | { type: 'static/loadStaticUsers'; payload: UsersType[] }
  | { type: 'static/addStaticUser'; payload: number };

export default UsersAction;
