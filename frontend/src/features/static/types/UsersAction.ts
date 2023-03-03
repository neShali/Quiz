import type UsersType from './UsersType';

type UsersAction =
  { type: 'static/loadStaticUsers'; payload: UsersType[] }

export default UsersAction;