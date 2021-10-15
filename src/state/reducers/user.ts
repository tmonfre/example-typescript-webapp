import { IReduxAction } from './types';
import { ActionTypes } from '../actions';
import { User } from '../../services/api/user/types';

export interface IUserState {
    user: User | Record<string, never>
}

const initialState: IUserState = {
  user: {},
};

const UserReducer = (state = initialState, action: IReduxAction): IUserState => {
  switch (action.type) {
    case ActionTypes.Users.FETCH_USER_DATA:
      return { ...state, user: <User> action.payload.data };

    default:
      return state;
  }
};

export default UserReducer;
