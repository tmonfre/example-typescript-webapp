import { useState, FormEvent } from 'react';
import { Props } from './index.d';

import './styles.scss';

const SignUp = (props: Props): JSX.Element => {
  const {
    signUpUser,
  } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function changeHandler(setter: (value: string) => void) {
    return (e: FormEvent<HTMLInputElement>) => setter(e.currentTarget.value);
  }

  function onSignUpClick() {
    signUpUser(email, password, firstName, lastName);
  }

  return (
    <div id="sign-up-container">
      <h2>Sign Up</h2>
      <div id="basic-auth-container">
        <input value={email} onChange={changeHandler(setEmail)} placeholder="Email" />
        <input value={password} onChange={changeHandler(setPassword)} placeholder="Password" type="password" />
        <input value={confirmPassword} onChange={changeHandler(setConfirmPassword)} placeholder="Confirm Password" type="password" />
      </div>
      <div id="account-details-container">
        <input value={firstName} onChange={changeHandler(setFirstName)} placeholder="First Name" />
        <input value={lastName} onChange={changeHandler(setLastName)} placeholder="Last Name" />
      </div>
      <div id="sign-up-cta-container">
        <button type="button" onClick={onSignUpClick}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
