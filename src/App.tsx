import { Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import { useMediaQuery } from 'react-responsive'
import { MediaSceens } from './constants/MediaScreens'
import ResendEmailPage from './pages/ResendEmailPage'
function App() {
  const isMobile = useMediaQuery({ query: MediaSceens.Mobile })
  const isTablet = useMediaQuery({ query: MediaSceens.Tablet })

  return (
    <Routes>
      <Route path='/register' element={<RegisterPage isTablet={isTablet} isMobile={isMobile} />} />
      <Route path='/resendEmail/:id' element={<ResendEmailPage />} />
    </Routes>
  )
}

export default App
