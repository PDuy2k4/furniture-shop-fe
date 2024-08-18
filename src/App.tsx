import ResendEmailPage from './pages/ResendEmailPage'
import VerifiedEmailPage from './pages/VerifiedEmailPage'
import RegisterPage from './pages/RegisterPage'
import { Route, Routes } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { MediaSceens } from './constants/MediaScreens'
import ErrorPgaeNotFound from './pages/ErrorPgaeNotFound'
import LoginPage from './pages/LoginPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import HomePage from './pages/HomePage'
function App() {
  const isMobile = useMediaQuery({ query: MediaSceens.Mobile })
  const isTablet = useMediaQuery({ query: MediaSceens.Tablet })

  return (
    <Routes>
      <Route path='/register' element={<RegisterPage isTablet={isTablet} isMobile={isMobile} />} />
      <Route path='/resendEmail/:navFrom/:id' element={<ResendEmailPage />} />
      <Route path='/verifyEmail/:token' element={<VerifiedEmailPage />} />
      <Route path='/login' element={<LoginPage isTablet={isTablet} isMobile={isMobile} />} />
      <Route path='/forgotPassword' element={<ForgotPasswordPage isTablet={isTablet} isMobile={isMobile} />} />
      <Route
        path='/resetPassword/:forgotPasswordToken'
        element={<ResetPasswordPage isTablet={isTablet} isMobile={isMobile} />}
      />
      <Route path='/home' element={<HomePage isMobile={isMobile} isTablet={isTablet} />} />
      <Route path='*' element={<ErrorPgaeNotFound />} />
    </Routes>
  )
}

export default App
