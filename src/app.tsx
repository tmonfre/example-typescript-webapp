import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  Home,
  NotFound,
} from './scenes';

import { PageRoutes } from './constants';
import { AppDispatch, State } from './state';
import { UserActions } from './state/actions';

import { AppTypes, StateProps, DispatchProps } from './app.d';

const App = (props: AppTypes): JSX.Element => {
  const { user } = props;

  useEffect(() => {
    props.fetchUserData();
  }, []);

  return (
    <Router>
      <div className="content">
        <p>{user ? JSON.stringify(user) : ''}</p>
        <Switch>
          <Route exact path={PageRoutes.Home} component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = (state: State): StateProps => {
  const {
    user,
  } = state;

  return {
    user,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
  fetchUserData: () => {
    dispatch(UserActions.fetchUserData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
