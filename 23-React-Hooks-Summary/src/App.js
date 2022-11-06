import React, { useContext } from 'react';
import { AuthCtx } from './context/auth-ctx';

import Ingredients from './components/Ingredients/Ingredients';
import Auth from './components/Auth';

const App = () => {
  const { isAuth } = useContext(AuthCtx);
  
  return (
    <>
      {isAuth && <Ingredients />}
      {!isAuth && <Auth />}
    </>
  );
};

export default App;
