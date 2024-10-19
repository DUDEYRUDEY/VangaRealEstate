import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import TopAppBar from './Pages/HomePagecomponents/TopAppBar';
import Home from './Pages/Home';
import Categories from './Pages/Categories';
import Predict from './Pages/Predict';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <Router>
      <TopAppBar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/predict" element={<Predict />} />
      </Routes>
    </Router>
  );
}

export default App;
