import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import RequireAuth from './components/Auth/RequireAuth';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth' element={<AuthPage />} />

        <Route element={<RequireAuth />}>
          <Route path='/profile' element={<UserProfile />} />
        </Route>

        <Route path='*' element={<Navigate to={'/'}/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
