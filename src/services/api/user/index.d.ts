// -------------- CUSTOM TYPE INTERFACES --------------

interface AuthDetails {
    email: string,
    password: string
}

interface AccountDetails extends Record<string, unknown> {
    firstName: string,
    lastName: string
}

export interface User extends AccountDetails {
    id: string,
    email: string,
    saltedPassword: string,
    isAdmin: boolean,
    createdDate: Date
}

// -------------- REQUEST INTERFACES --------------

export type ISignInUserRequest = AuthDetails

export interface ISignUpUserRequest extends AuthDetails, AccountDetails {}

export type IUpdateUserRequest = AccountDetails

// -------------- RESPONSE INTERFACES --------------

export interface ISignUpUserResponse {
    status: number,
    data: {
        model: User
    }
}

export interface ISignInUserResponse {
    status: number,
    data: {
        user: User,
        token: string
    }
}

export interface IGetUserResponse {
    status: number,
    data: User
}

export interface IUpdateUserResponse {
    status: number,
    data: {
        model: User
    }
}
