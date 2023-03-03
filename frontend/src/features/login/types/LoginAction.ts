import User from './User';

type LoginAction = 
| { type: 'login/loginSuccess'; payload: User }
| { type: 'login/userChecked'; payload: User | undefined}
| { type: 'login/logout'}

export default LoginAction;