import { useState, FormEvent } from 'react';
import { Props } from './index.d';

import './styles.scss';

const SignIn = (props: Props): JSX.Element => {
  const {
    signInUser,
  } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function changeHandler(setter: (value: string) => void) {
    return (e: FormEvent<HTMLInputElement>) => setter(e.currentTarget.value);
  }

  function onSignInClick() {
    signInUser(email, password);
  }

  return (
    <div id="sign-in-container">
      <h2>Sign In</h2>
      <div id="basic-auth-container">
        <input value={email} onChange={changeHandler(setEmail)} placeholder="Email" />
        <input value={password} onChange={changeHandler(setPassword)} placeholder="Password" type="password" />
      </div>
      <div id="sign-up-cta-container">
        <button type="button" onClick={onSignInClick}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignIn;
