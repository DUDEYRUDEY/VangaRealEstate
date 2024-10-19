import React from 'react';
import { Typography} from '@mui/material';

function AboutUs(){

    return(
    <>
    <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: 'Newsreader, sans-serif', }}>
        About Us
    </Typography>
        <p>Housing prices play a crucial role in the real estate market, influencing decisions for buyers, sellers, and investors alike. Predicting these prices accurately is essential for navigating the complexities of the market, particularly in the face of fluctuating economic conditions and regional factors.</p>
        <p>Machine learning has emerged as a powerful tool for forecasting housing prices by analyzing large datasets that include property characteristics, economic indicators, and historical trends. Unlike traditional methods, machine learning can uncover complex patterns, offering more precise predictions and deeper insights into the factors driving price changes</p>
        <p>This project focuses on developing a machine learning model to predict housing prices. By collecting and analyzing relevant data, we aim to build a model that not only provides accurate price forecasts but also helps users understand the key factors influencing the market. The final product will be a user-friendly interface where predictions can be accessed in real-time, offering valuable insights for anyone involved in real estate.</p>
    </>
    )
}

export default AboutUs;