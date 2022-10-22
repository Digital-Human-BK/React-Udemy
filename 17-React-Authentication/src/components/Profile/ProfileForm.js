import { useContext, useRef } from 'react';
import { AuthCtx } from '../../store/auth-ctx';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const newPassRef = useRef();
  const { token } = useContext(AuthCtx);

  const submitHandler = (ev) => {
    ev.preventDefault();

    const newPassword = newPassRef.current.value;

    fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBcYwxfOceBMXI1HjEF1rC_ZsSTeIzfETY',
      {
        method: 'POST',
        body: JSON.stringify({
          idToken: token,
          password: newPassword,
          returnSecureToken: false,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then();
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPassRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
