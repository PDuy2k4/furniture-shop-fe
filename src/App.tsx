import ResendEmailPage from './pages/ResendEmailPage'
import VerifiedEmailPage from './pages/VerifiedEmailPage'
import RegisterPage from './pages/RegisterPage'
import { Route, Routes } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { MediaSceens } from './constants/MediaScreens'
import ErrorPgaeNotFound from './pages/ErrorPgaeNotFound'
import LoginPage from './pages/LoginPage'
function App() {
  const isMobile = useMediaQuery({ query: MediaSceens.Mobile })
  const isTablet = useMediaQuery({ query: MediaSceens.Tablet })

  return (
    <Routes>
      <Route path='/register' element={<RegisterPage isTablet={isTablet} isMobile={isMobile} />} />
      <Route path='/resendEmail/:id' element={<ResendEmailPage />} />
      <Route path='/verify-email/:token' element={<VerifiedEmailPage />} />
      <Route path='/login' element={<LoginPage isTablet={isTablet} isMobile={isMobile} />} />
      <Route path='*' element={<ErrorPgaeNotFound />} />
    </Routes>
  )
}

export default App
