import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { Provider } from 'react-redux'
import store from './Redux/store.tsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = "505813889218-kpgp9h5vcqanbf1p9i3drrh2idgnfbqu.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <GoogleOAuthProvider clientId={clientId}>
          <App />
        </GoogleOAuthProvider>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
