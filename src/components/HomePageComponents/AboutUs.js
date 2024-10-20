import React from 'react';
import { Typography,Box} from '@mui/material';

function AboutUs(){

    return (
        <Box sx={{ padding: '40px', backgroundColor: '#f8f8f8' }}>
          <Typography variant="h4" gutterBottom sx={{textAlign: 'center'}}>
            About Us
          </Typography>
          <Typography variant="body1" paragraph>
            Housing prices play a crucial role in the real estate market, influencing decisions for buyers, sellers, and investors alike. Predicting these prices accurately is essential for navigating the complexities of the market, particularly in the face of fluctuating economic conditions and regional factors.
          </Typography>
          <Typography variant="body1" paragraph>
            Machine learning has emerged as a powerful tool for forecasting housing prices by analyzing large datasets that include property characteristics, economic indicators, and historical trends. Unlike traditional methods, machine learning can uncover complex patterns, offering more precise predictions and deeper insights into the factors driving price changes.
          </Typography>
          <Typography variant="body1" paragraph>
            This project focuses on developing a machine learning model to predict housing prices. By collecting and analyzing relevant data, we aim to build a model that not only provides accurate price forecasts but also helps users understand the key factors influencing the market.
          </Typography>
        </Box>
      );
}

export default AboutUs;