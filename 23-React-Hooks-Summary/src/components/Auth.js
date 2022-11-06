import React, { useContext } from 'react';

import Card from './UI/Card';
import './Auth.css';
import { AuthCtx } from '../context/auth-ctx';

const Auth = (props) => {
  const { login } = useContext(AuthCtx);
  const loginHandler = () => {
    login();
  };

  return (
    <div className='auth'>
      <Card>
        <h2>You are not authenticated!</h2>
        <p>Please log in to continue.</p>
        <button onClick={loginHandler}>Log In</button>
      </Card>
    </div>
  );
};

export default Auth;
