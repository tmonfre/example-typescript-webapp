import { connect } from 'react-redux';

import { AppDispatch } from '../../../state';
import { UserActions } from '../../../state/actions';
import { DispatchProps } from './index.d';

import component from './component';

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
  signUpUser: (email: string, password: string, firstName: string, lastName: string) => {
    dispatch(UserActions.signUpUser(email, password, firstName, lastName));
  },
});

export default connect(null, mapDispatchToProps)(component);
