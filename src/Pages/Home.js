
import '../App.css';
import React, { useState } from 'react';
import Content from '../components/HomePageComponents/Content';
import AboutUs from '../components/HomePageComponents/AboutUs';
import { AppBar, Toolbar, Typography, Button,Box } from '@mui/material';
import Images from '../components/HomePageComponents/TwoImages'




function Home() {
  return (
    <div>
      <Content/>
      <Images/>
      <AboutUs/>
      
    </div>
      
    
  );
}

export default Home;
