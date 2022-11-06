import React, { createContext, useState } from 'react';

export const AuthCtx = createContext({
  isAuth: false,
  login: () => {},
});

const AuthCtxProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logUser = () => {
    setIsAuthenticated(true);
  };

  return (
    <AuthCtx.Provider value={{ isAuth: isAuthenticated, login: logUser }}>
      {children}
    </AuthCtx.Provider>
  );
};

export default AuthCtxProvider;
