import User from './User';

type LoginState = {
    loginChecked: boolean;
    user?: User;
};

export default LoginState;