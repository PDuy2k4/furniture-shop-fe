import { Routes, Route, Navigate } from 'react-router-dom';
// App.tsx
import { SignIn, Welcome, SignUp, Verify, Error,ResetPassword,RequestPassword } from './pages';
function App() {
  return (
    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='/welcome' element={<Welcome />} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/verify' element={<Verify/>} />
      <Route path='/error' element={<Error/>} />
      <Route path='/resetPass' element={<ResetPassword/>} />
      <Route path='/requestNewPass' element={<RequestPassword/>} />
      {/* Catch-all route */}
      <Route path='*' element={<Navigate to='/error' />} />
    </Routes>
  );
}

export default App;
