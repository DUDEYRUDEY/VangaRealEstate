
import '../App.css';
import React, { useState } from 'react';
import Content from './HomePagecomponents/Content';
import AboutUs from './HomePagecomponents/AboutUs';




function Home() {
  return (
    <div className="App">
      <Content/>
      <AboutUs/>
      
      
    </div>
  );
}

export default Home;
