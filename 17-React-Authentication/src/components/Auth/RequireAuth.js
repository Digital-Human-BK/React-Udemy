import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthCtx } from '../../store/auth-ctx';

const RequireAuth = () => {
  const { isLoggedIn } = useContext(AuthCtx);

  return isLoggedIn ? <Outlet /> : <Navigate to='/' />;
};

export default RequireAuth;
