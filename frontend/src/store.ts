import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import loginReducer from './features/login/loginReducer';
import themesReducer from './features/themes/themesReducer';

// store - хранит объект с данными
// store.dispatch - функция для применения экшена

// store: RootState = {
//  notes: {
//    notesList: [],
//  },
//  contacts: {
//    address: '...',
//  }
// }

const store = createStore(
  combineReducers({
    // ключ - название раздела (feature)
    // значение - сам редьюсер
    login: loginReducer,
    themes: themesReducer,
  }),
  composeWithDevTools(),
);

export default store;

// тип централизованного состояния
export type RootState = ReturnType<typeof store.getState>;
