import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import AuthCtxProvider from './store/auth-ctx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthCtxProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthCtxProvider>
);
