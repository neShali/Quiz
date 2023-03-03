import type UsersState from './types/UsersState';
import type UsersAction from './types/UsersAction';

export const initialStateUser: UsersState = {
  usersList: [],
};

function reducerStatic(state: UsersState = initialStateUser, action: UsersAction): UsersState {
  switch (action.type) {
    case 'static/loadStaticUsers':
      return { ...state, usersList: action.payload };
    default:
      return state;
  }
}

export default reducerStatic;
