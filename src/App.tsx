import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ToastContainer from './components/ToastMessage';
import NewPasswordPage from './pages/NewPasswordPage';

function App() {
  return (
    <>
      <ToastContainer/>
      <Routes>
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/forgotpassword' element={<ForgotPasswordPage />} />
        <Route path='/newpassword' element={<NewPasswordPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;