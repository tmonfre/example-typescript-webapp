import { Props } from './index.d';

import './styles.scss';

const SignIn = (props: Props): JSX.Element => {
  const {
    signInUser,
  } = props;

  return (
    <div id="sign-in-container">
      <p>Sign In</p>
    </div>
  );
};

export default SignIn;
