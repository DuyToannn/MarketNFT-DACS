import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { NFTVideo } from './components/NFTVideo';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>      
        <Route path="/" element={<NFTVideo />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

