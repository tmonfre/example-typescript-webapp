import { ThunkDispatch } from 'redux-thunk';

import { IUserState } from './reducers/user';

export interface State {
    user: IUserState
}

export type AppDispatch = ThunkDispatch<Record<string, unknown>, Record<string, unknown>, any>;
