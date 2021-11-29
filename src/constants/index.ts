import ApiConfig from './api-config.json';
import PageRoutes from './routes.json';

export const REQUEST_TIMEOUT = 1000;

export enum LocalStorageTokens {
  Auth = 'example_webapp_web_auth_token',
  UserId = 'example_webapp_web_user_id'
}

export enum RequestStates {
  Pending = 'PENDING',
  Success = 'SUCCESS',
  Failure = 'FAILURE'
}

export {
  ApiConfig,
  PageRoutes,
};
