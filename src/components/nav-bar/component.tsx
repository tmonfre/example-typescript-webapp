import { Props } from './index.d';

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
      <h4>Nav</h4>
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
