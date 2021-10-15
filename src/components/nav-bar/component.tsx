import { Link } from 'react-router-dom';

import { Props } from './index.d';
import { PageRoutes } from '../../constants';

import './styles.scss';

const NavBar = (props: Props): JSX.Element => {
  const {
    isLoggedIn,
    signOutUser,
    user: {
      firstName,
    },
  } = props;

  return (
    <nav>
      <Link to={PageRoutes.Home}>Nav</Link>
      {isLoggedIn && <p>{`Welcome, ${firstName}`}</p>}
      {isLoggedIn && (
        <button type="button" onClick={signOutUser}>
          Sign Out
        </button>
      )}
    </nav>
  );
};

export default NavBar;
