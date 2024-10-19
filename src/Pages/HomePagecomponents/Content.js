import React from 'react';
import {Typography, Button } from '@mui/material';

function Content(){

    return(
        <>
            <Typography variant="h1" sx={{ flexGrow: 1, fontFamily: 'Newsreader, sans-serif', }}>
                Housing prices prediction
            </Typography>
            <Button sx={{ backgroundColor: 'green', color: 'white', marginLeft: 1 }}>Search For House</Button>
            {/* Still need images to go here */}
        </>
    )
    
}

export default Content;