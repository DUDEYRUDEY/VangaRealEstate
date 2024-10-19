import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar(){
    const[searchQuery, setSearchQuery] = useState('');
    
    const handleSearch = (event) => {
            setSearchQuery(event.target.value);
            //Updating and getting the search of the user. 
    }

    return(
        
            <TextField
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Find Postcode Suburb..."
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>    
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            <Button sx={{ backgroundColor: 'green', color: 'white', marginLeft: 1 }}>
                                Filter
                            </Button>
                        </InputAdornment>
                    ),

                }} 
            />
       

    );

}

export default SearchBar;