import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import AboutModel from "../components/SearchPageComponents/AboutModel"
import SearchForm from '../components/SearchPageComponents/form';

function Search(){
    return(
        <>
        <div >
                <h1 style={{ textAlign: 'center', marginTop: '60px',fontFamily: 'Newsreader, sans-serif' }} >Housing Price Search</h1>
                <p style = {{marginLeft: '50px', marginRight:"50px"}}>
                    Housing prices play a crucial role in the real estate market, influencing decisions for buyers, sellers, and investors alike.
                    Predicting these prices accurately is essential for navigating the complexities of the market, particularly in the face of
                    fluctuating economic conditions and regional factors. We have created a tool to help you predict the price of your house. Fill in the fields below
                </p>
                <h2 style={{fontFamily: 'Newsreader, sans-serif', textAlign: "center"}}>Fill in the fields below</h2>
                <SearchForm/>
        </div>
        <AboutModel/>
        </>
    );
}

export default Search;