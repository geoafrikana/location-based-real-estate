import {BrowserRouter, Route, Routes} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Listings from './Components/Listings';
import { CssBaseline} from '@mui/material';
import NavBar from './Components/NavBar';
import Testing from './Components/Testing';
import Register from './Components/Register';

function App() {
  return (
    <BrowserRouter>
    <CssBaseline />
    <NavBar />
    <Routes>
      
      <Route path="/" element= {<Home />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/listings" element={<Listings />} />
      <Route path="/testing" element= {<Testing />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
