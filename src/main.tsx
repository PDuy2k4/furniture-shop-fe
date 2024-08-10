import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { Provider } from 'react-redux'
import store from './Redux/store.tsx'
import { BrowserRouter } from 'react-router-dom'
import LoginPage from './pages/loginPage.tsx'
import RegisterPage from './pages/registerPage.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <LoginPage />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
)
