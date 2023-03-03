/* eslint-disable @typescript-eslint/default-param-last */
import State from './types/State';
import Action from './types/Action';

export const initialState: State = {
  themesList: [],
  score: 0,
};

function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'themes/loadThemes':
      return { ...state, themesList: action.payload };
    case 'themes/changePoints':
      return { ...state, score: Number(state.score) + Number(action.payload) };
    default:
      return state;
  }
}

export default reducer;
