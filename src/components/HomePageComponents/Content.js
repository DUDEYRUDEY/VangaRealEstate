import React from 'react';
import {Typography, Button, Box} from '@mui/material';

function Content(){

    return(
        <Box 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                height: '60vh', 
                textAlign: 'center',
                backgroundColor: '#fff' 
            }}
            >
            <Typography variant="h2" sx={{ flexGrow: 1, fontFamily: 'Inter, sans-serif', marginTop: '80px' }}> {/*Applies padding at bottom. Default 16px */}
                Housing prices prediction
            </Typography>
            <Button size = "large" sx={{ backgroundColor: 'green', color: 'white',  marginBottom: "140px", width: '227px', height: '64px', minHeight : "64px", fontFamily: 'Newsreader, sans-serif'}}>Search For House</Button>
        
        </Box>
    )
    
}

export default Content;