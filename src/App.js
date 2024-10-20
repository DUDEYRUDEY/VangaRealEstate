import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import TopAppBar from './components/HomePageComponents/TopAppBar';
import Home from './Pages/Home';
import Search from './Pages/SearchPage';
import Predict from './Pages/Prediction';
import About from './Pages/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <Router>
      <TopAppBar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
