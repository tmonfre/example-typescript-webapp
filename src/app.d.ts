import { IUserState } from './state/reducers/user';

export type StateProps = {
    user: IUserState
}

export type DispatchProps = {
    fetchUserData: () => void
}

export interface AppTypes extends StateProps, DispatchProps {}
