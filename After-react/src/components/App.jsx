import './App.css';
import 'react-toastify/dist/ReactToastify.css';

//Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Context
import { DarkModeProvider } from '../context/DarkModeContext.js';

//React Toastify
import { ToastContainer } from 'react-toastify';

//Components 
import { Navbar } from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Checkout } from './Checkout/Checkout';
import { Cart } from './Cart/Cart';

import { createProducts } from '../firebase/firebase.js';
export const App = () => {
  //createProducts()
  return (
    <>
      <BrowserRouter>
        <DarkModeProvider>
          <Navbar />
          <ToastContainer />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='/product/:id' element={<ItemDetailContainer />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<h1>404 Not Found</h1>} />
          </Routes>
        </DarkModeProvider>
      </BrowserRouter>

    </>

  )
}