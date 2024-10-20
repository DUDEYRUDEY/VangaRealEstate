import React from 'react';
import { AppBar, Toolbar, Typography, Button,Box } from '@mui/material';
import { Link } from 'react-router-dom';



function TopAppBar() {
    return(
        <AppBar position="static" sx={{ backgroundColor: '#f8f8f8', color:'#000' }}>
            <Toolbar>

            <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: 'Newsreader, sans-serif', color: '#2E7D32', fontWeight: 500, fontSize:'40px', marginLeft:'96px' }}>
            Vanga Real Estate
            </Typography>
            <Box>
                <Button component={Link} to="/" sx={{ backgroundColor: 'f8f8f8', color: 'black', margin: '0 64px', fontSize: '20px', fontFamily: 'Inter, sans-serif'}}>Home</Button>
                <Button component={Link} to="/about" sx={{ backgroundColor: 'f8f8f8', color: 'black', margin: '0 64px', fontSize: '20px', fontFamily: 'Inter, sans-serif' }}>About</Button>
                <Button component={Link} to="/search" sx={{ backgroundColor: '#2E7D32', color: 'white', margin: '0 64px', fontSize: '20px', fontFamily: 'Inter, sans-serif'}}>Search</Button>
            </Box>
            
        

            </Toolbar>
        </AppBar>
    )
}

export default TopAppBar;