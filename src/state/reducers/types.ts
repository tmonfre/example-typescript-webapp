import { Action } from 'redux';

import { RequestStates } from '../../constants';

export interface IReduxAction extends Action {
    payload: {
        status: RequestStates,
        data: Record<string, unknown>
    }
}
