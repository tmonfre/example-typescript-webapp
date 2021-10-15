import {
  createApiRequest,
  generateBasicAuthHeader,
  RequestType,
  HeaderType,
} from '../init';

import {
  ISignInUserRequest,
  ISignUpUserRequest,
  ISignInUserResponse,
  ISignUpUserResponse,
  IGetUserResponse,
  IUpdateUserRequest,
  IUpdateUserResponse,
} from './types';

import { getAuthToken } from '../../../utils';

class UserRequests {
    private static baseEndpoint = '/users'

    /**
     * @description signs up user
     * @param {ISignUpUserRequest} request object with request info
     * @returns {Promise<ISignUpUserResponse>} api response
     */
    public static async signUpUser(request: ISignUpUserRequest)
    : Promise<ISignUpUserResponse> {
      const {
        email, password, firstName, lastName,
      } = request;

      const { data } = await createApiRequest({
        method: RequestType.Post,
        url: this.baseEndpoint,
        data: { firstName, lastName },
        headers: { [HeaderType.Authorization]: generateBasicAuthHeader(email, password) },
      });

      return data;
    }

    /**
     * @description signs user in
     * @param {ISignInUserRequest} request object with request info
     * @returns {Promise<ISignInUserResponse>} api response
     */
    public static async signInUser(request: ISignInUserRequest)
    : Promise<ISignInUserResponse> {
      const { email, password } = request;

      const { data } = await createApiRequest({
        method: RequestType.Get,
        url: `${this.baseEndpoint}/auth`,
        headers: { [HeaderType.Authorization]: generateBasicAuthHeader(email, password) },
      });

      return data;
    }

    /**
     * @description fetches user by id
     * @param {string} id user id
     * @returns {Promise<IGetUserResponse>} api response
     */
    public static async getUserById(id: string): Promise<IGetUserResponse> {
      const { data } = await createApiRequest({
        method: RequestType.Get,
        url: `${this.baseEndpoint}/id/${id}`,
        headers: { [HeaderType.Authorization]: getAuthToken() },
      });

      return data;
    }

    /**
     * @description updates user
     * @param {IUpdateUserRequest} request object with request info
     * @returns {Promise<ISignInUserResponse>} api response
     */
    public static async updateUser(request: IUpdateUserRequest)
     : Promise<IUpdateUserResponse> {
      const { data } = await createApiRequest({
        method: RequestType.Get,
        url: `${this.baseEndpoint}/auth`,
        data: request,
        headers: { [HeaderType.Authorization]: getAuthToken() },
      });

      return data;
    }
}

export default UserRequests;
