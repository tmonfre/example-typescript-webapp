import { connect } from 'react-redux';

import { AppDispatch } from '../../../state';
import { UserActions } from '../../../state/actions';
import { DispatchProps } from './index.d';

import component from './component';

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
  signInUser: (email: string, password: string) => {
    dispatch(UserActions.signInUser(email, password));
  },
});

export default connect(null, mapDispatchToProps)(component);
