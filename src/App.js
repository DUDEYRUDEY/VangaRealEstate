import React from 'react'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar.js';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Prediction from './pages/Prediction/Prediction';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <main>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/prediction" element={<Prediction />} />
      </Routes>
    </main>
    <Footer />
    </BrowserRouter>
  )
}

export default App; 