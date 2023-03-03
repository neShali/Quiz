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
      return {
        ...state,
        themesList: action.payload,
      };

    case 'themes/changePoints':
      return { ...state, score: Number(state.score) + Number(action.payload) };

    case 'themes/changeQuestion':
      return {
        ...state,
        themesList: state.themesList.map((t) => {
          if (Number(t.id) === action.payload.themeId) {
            return {
              ...t,
              questions: t.questions.map((q) => {
                if (q.id === action.payload.id) {
                  return { ...q, answered: true };
                }
                return q;
              }),
            };
          }
          return t;
        }),
      };

    default:
      return state;
  }
}

export default reducer;

// themesList: state.themesList.map((t) => {
//   if (t.id !== action.payload.themeId) {
//     return t;
//   }
//   return {
//     ...t,
//     questions: t.questions.map((q) => {
//       if (q.id === action.payload.id) {
//         return { ...q, answered: true };
//       }
//       return q;
//     }),
//   };
// }),
