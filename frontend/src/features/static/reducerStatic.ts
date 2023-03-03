import type State from './types/UsersState';
import type Action from './types/UsersAction';
// import RestaurantType from './types/RestaurantType';

// reducer - функция, которая принимает текущее состояние и экшен (действие, которое хочет сделать пользователь) и возвращает новое состояние

// state = { notesList: [] }
// action = { type: 'notes/addNote'; payload: { text: 'прими таблетки' } }
// state = { notesList: [{ id: 1, text: 'прими таблетки' }] }

export const initialState: State = {
  usersList: [],
};

function reducerStatic(state: State, action: Action): State {
  switch (action.type) {
    case 'static/loadStaticUsers':
      return { ...state, usersList: action.payload };
    default:
      return state;
  }
}

export default reducerStatic;