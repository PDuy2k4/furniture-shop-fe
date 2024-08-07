import { Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import { useMediaQuery } from 'react-responsive'
import { MediaSceens } from './constants/MediaScreens'
function App() {
  const isMobile = useMediaQuery({ query: MediaSceens.Mobile })
  const isTablet = useMediaQuery({ query: MediaSceens.Tablet })

  return (
    <Routes>
      <Route path='/register' element={<RegisterPage isTablet={isTablet} isMobile={isMobile} />} />
    </Routes>
  )
}

export default App
