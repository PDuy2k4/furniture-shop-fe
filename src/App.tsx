
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import RegisterPage from './pages/RegisterPage'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
function App() {

  return (
    <Routes>
      <Route path='/register' element={<RegisterPage/>} />
      <Route path='/forgotpassword/:id' element={<ForgotPasswordPage />} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/home' element={<HomePage/>} />
    </Routes>
  )
}

export default App