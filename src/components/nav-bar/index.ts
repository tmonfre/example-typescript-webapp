import { connect } from 'react-redux';

import { State, AppDispatch } from '../../state';
import { UserActions } from '../../state/actions';
import { StateProps, DispatchProps } from './index.d';

import component from './component';

const mapStateToProps = (state: State): StateProps => {
  const {
    user: {
      user,
    },
  } = state;

  return {
    user,
    isLoggedIn: Object.keys(user).length > 0,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
  signOutUser: () => {
    dispatch(UserActions.signOutUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(component);
