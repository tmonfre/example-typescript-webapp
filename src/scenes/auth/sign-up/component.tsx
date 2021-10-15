import { Props } from './index.d';

import './styles.scss';

const SignUp = (props: Props): JSX.Element => {
  const {
    signUpUser,
  } = props;

  return (
    <div id="sign-up-container">
      <p>Sign Up</p>
    </div>
  );
};

export default SignUp;
