import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  Auth,
  Home,
  NotFound,
} from './scenes';

import {
  NavBar,
} from './components';

import { PageRoutes } from './constants';
import { AppDispatch, State } from './state';
import { UserActions } from './state/actions';

import { Props, StateProps, DispatchProps } from './app.d';

const App = (props: Props): JSX.Element => {
  useEffect(() => {
    props.fetchUserData();
  }, []);

  return (
    <Router>
      <NavBar />
      <div className="content">
        <Switch>
          <Route exact path={PageRoutes.Home} component={Home} />
          <Route path={PageRoutes.Auth.SignIn} component={Auth.SignIn} />
          <Route path={PageRoutes.Auth.SignUp} component={Auth.SignUp} />
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
