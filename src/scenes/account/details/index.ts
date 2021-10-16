import { connect } from 'react-redux';

import { State } from '../../../state';
import { StateProps } from './index.d';

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

export default connect(mapStateToProps, null)(component);
