import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthCtx } from '../../store/auth-ctx';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const navigate = useNavigate()
  const {isLoggedIn, logout} = useContext(AuthCtx);

  const logoutHandler = () => {
    logout();
    navigate('/');
  }
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && <li>
            <Link to='/auth'>Login</Link>
          </li>}
          {isLoggedIn && <li>
            <Link to='/profile'>Profile</Link>
          </li>}
          {isLoggedIn && <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
