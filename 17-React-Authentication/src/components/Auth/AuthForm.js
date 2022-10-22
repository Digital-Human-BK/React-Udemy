import { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthCtx } from '../../store/auth-ctx';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();

  const { login } = useContext(AuthCtx);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (ev) => {
    ev.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    let url;
    setIsLoading(true);

    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBcYwxfOceBMXI1HjEF1rC_ZsSTeIzfETY';
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBcYwxfOceBMXI1HjEF1rC_ZsSTeIzfETY';
    }
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, returnSecureToken: true }),
    })
      .then((res) => {
        setIsLoading(false);

        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed';
            if (data.error.message) {
              errorMessage = data.error.message;
            }

            console.log(data);
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        login(data.idToken);
        navigate('/')
        console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passRef} />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? 'Login' : 'Create Account'}</button>
          )}
          {isLoading && <p>Sending request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
