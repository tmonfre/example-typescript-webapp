import { Action, combineReducers } from 'redux';

import { RequestStates } from '../../constants';

import UserReducer from './user';

export interface IReduxAction extends Action {
  payload: {
      status: RequestStates,
      data: Record<string, unknown>
  }
}

const rootReducer = combineReducers({
  user: UserReducer,
});

export default rootReducer;
