import { User } from '../../../services/api/user/index.d';

export type StateProps = {
    user: User | Record<string, never>
    isLoggedIn: boolean
}

export type DispatchProps = {

}

export interface Props extends StateProps, DispatchProps {}
