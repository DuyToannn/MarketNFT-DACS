import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar';
import { NFTVideo } from './components/NFTVideo';
function App() {
  return (
    <div className="App">
  
      <div className="container">
      <Routes>
          <Route path="/" element={<NFTVideo />}/>
       
        </Routes>
    </div>
    </div>
  );
}

export default App;
