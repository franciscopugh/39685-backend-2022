import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/App';

//Context
import { CarritoProvider } from './context/CartContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CarritoProvider>
    <App />
  </CarritoProvider>
);
