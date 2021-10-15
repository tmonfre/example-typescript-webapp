import axios, { AxiosResponse } from 'axios';

import { ApiConfig, REQUEST_TIMEOUT } from '../../constants';

export enum RequestType {
    Get = 'get',
    Post = 'post',
    Put = 'put',
    Delete = 'delete'
}

export enum HeaderType {
    Authorization = 'Authorization'
}

export interface ApiRequestConfig {
    method: RequestType,
    url: string,
    data?: Record<string, unknown>,
    headers?: Record<HeaderType, string>
}

/**
 * @description creates API request to backend
 * @param config api request config
 * @returns {Promise<AxiosResponse>} response from endpoint in form of promise
 */
export async function createApiRequest(config: ApiRequestConfig): Promise<AxiosResponse> {
  return axios({
    baseURL: ApiConfig.baseUrl,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
    ...config,
  });
}

/**
 * @description generates basic auth header from username and password
 * @param username username/email field
 * @param password password field
 * @returns {string} basic auth header
 */
export function generateBasicAuthHeader(username: string, password: string): string {
  const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');
  return `Basic ${token}`;
}
