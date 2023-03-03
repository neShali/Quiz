/* eslint-disable @typescript-eslint/default-param-last */
import LoginAction from './types/LoginAction';
import LoginState from './types/LoginState';

const initialState: LoginState = {
    loginChecked: false,
    user: undefined,
};

const loginReducer = (state: LoginState = initialState, action: LoginAction): LoginState => {
    switch (action.type) {
        case 'login/userChecked': {
            return { ...state, loginChecked: true, user: action.payload }
        }

        case 'login/loginSuccess': {
            return { ...state, user: action.payload}
        }
        case 'login/logout': {
            return { ...state, user: undefined};
        }
        default:
            return state;
    }
}

export default loginReducer;