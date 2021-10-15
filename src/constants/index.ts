import apiConfig from './api-config.json';

export const REQUEST_TIMEOUT = 1000;

export enum LocalStorageTokens {
  Auth = '3q_web_auth_token',
  UserId = '3q_web_user_id'
}

export enum RequestStates {
  Pending = 'PENDING',
  Success = 'SUCCESS',
  Failure = 'FAILURE'
}

export enum PageRoutes {
  Home = '/'
}

export {
  apiConfig,
};
