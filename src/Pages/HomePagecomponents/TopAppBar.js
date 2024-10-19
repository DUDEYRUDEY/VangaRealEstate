import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';



function TopAppBar() {
    return(
        <AppBar position="static" sx={{ backgroundColor: 'white' }}>
            <Toolbar>

            <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: 'Newsreader, sans-serif', color: 'green' }}>
            Vanga Real Estate
            </Typography>

            <Button component={Link} to="/categories" sx={{ backgroundColor: 'white', color: 'black', marginLeft: 1 }}>Categories</Button>
            <Button component={Link} to="/" sx={{ backgroundColor: 'white', color: 'black', marginLeft: 1 }}>Home</Button>
            <Button component={Link} to="/predict" sx={{ backgroundColor: 'green', color: 'white', marginLeft: 1 }}>Predict</Button>
            
        

            </Toolbar>
        </AppBar>
    )
}

export default TopAppBar;