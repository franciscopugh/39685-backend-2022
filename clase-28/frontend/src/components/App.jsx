import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components 
import { Register } from './Register/Register';
import { Login } from './Login/Login';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        Navbar
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
        Footer
      </BrowserRouter>

    </>

  )
}