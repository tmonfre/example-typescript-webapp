import { Dispatch } from 'redux';

import { RequestStates } from '../../constants';
import { UserActionTypes } from './types';
import { api } from '../../services';

import {
  setUserId,
  setAuthToken,
  getAuthToken,
  getUserId,
} from '../../utils';

/**
 * @description action creator for user sign up
 * @param email user email
 * @param password user password
 * @param firstName user first name
 * @param lastName user last name
 */
export function signUpUser(email: string, password: string, firstName: string, lastName: string) {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch({ type: UserActionTypes.FETCH_USER_DATA, payload: { status: RequestStates.Pending } });

    const request = {
      email, password, firstName, lastName,
    };

    try {
      const { data: { model: user } } = await api.users.signUpUser(request);
      const { data: { token } } = await api.users.signInUser({ email, password });

      setUserId(user.id);
      setAuthToken(token);

      dispatch({
        type: UserActionTypes.FETCH_USER_DATA,
        payload: {
          status: RequestStates.Success,
          data: user,
        },
      });
    } catch (error) {
      dispatch({
        type: UserActionTypes.FETCH_USER_DATA,
        payload: {
          status: RequestStates.Failure,
          error,
        },
      });
    }
  };
}

/**
 * @description action creator for user sign up
 * @param email user email
 * @param password user password
 */
export function signInUser(email: string, password: string) {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch({ type: UserActionTypes.FETCH_USER_DATA, payload: { status: RequestStates.Pending } });

    try {
      const { data: { token, user } } = await api.users.signInUser({ email, password });

      setUserId(user.id);
      setAuthToken(token);

      dispatch({
        type: UserActionTypes.FETCH_USER_DATA,
        payload: {
          status: RequestStates.Success,
          data: user,
        },
      });
    } catch (error) {
      dispatch({
        type: UserActionTypes.FETCH_USER_DATA,
        payload: {
          status: RequestStates.Failure,
          error,
        },
      });
    }
  };
}

/**
 * @description action creator for signing user out
 */
export function signOutUser() {
  return (dispatch: Dispatch): void => {
    setUserId('');
    setAuthToken('');

    dispatch({
      type: UserActionTypes.FETCH_USER_DATA,
      payload: {
        status: RequestStates.Success,
        data: {},
      },
    });
  };
}

/**
 * @description action creator for fetching user data from token
 */
export function fetchUserData() {
  return async (dispatch: Dispatch): Promise<void> => {
    const userId = getUserId();
    const token = getAuthToken();

    if (!(userId && token)) return;

    dispatch({ type: UserActionTypes.FETCH_USER_DATA, payload: { status: RequestStates.Pending } });

    try {
      const { data: user } = await api.users.getUserById(userId);

      dispatch({
        type: UserActionTypes.FETCH_USER_DATA,
        payload: {
          status: RequestStates.Success,
          data: user,
        },
      });
    } catch (error) {
      dispatch({
        type: UserActionTypes.FETCH_USER_DATA,
        payload: {
          status: RequestStates.Failure,
          error,
        },
      });
    }
  };
}
