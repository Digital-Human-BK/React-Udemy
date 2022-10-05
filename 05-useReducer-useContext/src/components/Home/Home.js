import React, { useContext } from 'react';

import classes from './Home.module.css';
import AuthContext from '../../context/auth-context';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';

const Home = () => {
  const {onLogout } = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
