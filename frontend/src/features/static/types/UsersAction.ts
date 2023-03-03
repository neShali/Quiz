import type UsersType from './UsersType';

type UsersAction =
  // имя типа - это 'раздел(feature)/действие'
  { type: 'static/loadStaticUsers'; payload: UsersType[] }
  

export default UsersAction;