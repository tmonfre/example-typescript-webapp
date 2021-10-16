import { Props } from './index.d';

import './styles.scss';

const AccountDetails = (props: Props): JSX.Element => {
  const {
    user,
    isLoggedIn,
  } = props;

  return (
    <div id="account-details-container">
      <h2>Account Details</h2>
      {isLoggedIn && (
        <p>{`${user.firstName} ${user.lastName}`}</p>
      )}
    </div>
  );
};

export default AccountDetails;
