import { RootState } from '../../store';
import User from './types/User';

export const selectAuthChecked = (state: RootState): boolean => state.login.loginChecked;
export const selectUser = (state: RootState): User | undefined => state.login.user;