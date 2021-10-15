import { LocalStorageTokens } from '../constants';

/**
 * @description fetches a value in local storage
 * @param key local storage key for requested item
 * @returns {string | null} item if found in local storage, null otherwise
 */
export function fetchLocalStorage(key: LocalStorageTokens): string | null {
  return localStorage.getItem(key);
}

/**
 * @description fetches a value in local storage
 * @param key local storage key for item
 * @param value value to be set
 * @returns {void}
 */
export function setLocalStorage(key: LocalStorageTokens, value: string): void {
  return localStorage.setItem(key, value);
}

/**
 * @description fetches the user auth token from local storage
 * @returns {string | null} auth token if found
 */
export function getAuthToken(): string {
  return fetchLocalStorage(LocalStorageTokens.Auth) || '';
}

/**
 * @description sets the user auth token in local storage
 * @param value the auth token to set
 * @returns {void}
 */
export function setAuthToken(value: string): void {
  return setLocalStorage(LocalStorageTokens.Auth, value);
}

/**
 * @description fetches the user id from local storage
 * @returns {string | null} user id if found
 */
export function getUserId(): string {
  return fetchLocalStorage(LocalStorageTokens.UserId) || '';
}

/**
 * @description sets the user id in local storage
 * @param value the user id to set
 * @returns {void}
 */
export function setUserId(value: string): void {
  return setLocalStorage(LocalStorageTokens.UserId, value);
}
