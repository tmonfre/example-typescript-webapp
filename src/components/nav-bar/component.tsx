import { Link } from 'react-router-dom';

import { Props } from './index.d';
import { PageRoutes } from '../../constants';

import './styles.scss';

import menuImg from './menu.png';

const NavBar = (props: Props): JSX.Element => {
  const {
    isLoggedIn,
    user: {
      firstName,
    },
  } = props;

  function handleMenuButtonClick() {
    console.log('open menu');
  }

  return (
    <nav>
      {isLoggedIn && <p>{`Welcome back, ${firstName}`}</p>}
      <Link to={PageRoutes.Home}>Example Webapp</Link>
      <button type="button" onClick={handleMenuButtonClick}>
        <img src={menuImg} id="menu-button" alt="menu button" />
      </button>
    </nav>
  );
};

export default NavBar;
