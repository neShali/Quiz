/* eslint-disable @typescript-eslint/default-param-last */
import State from './types/State';
import Action from './types/Action';

export const initialState: State = {
    themesList: [],
};

function reducer(state: State = initialState, action: Action): State {
    switch (action.type) {
        case 'themes/loadThemes':
            return { ...state, themesList: action.payload}
        default:
            return state;
    }
}

export default reducer