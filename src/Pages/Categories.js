import { Card, Typography,Box } from "@mui/material";
import SearchBar from "./CategoriesPageComponents/SearchBar";
import ImgMediaCard from "./CategoriesPageComponents/CardComponent";

function Categories(){
    return(
        <>
            <Typography>
                Hello. It's linking
            </Typography>
            <SearchBar/>
            <Box display="flex" flexDirection="row" gap={2}>
                <ImgMediaCard/>
                <ImgMediaCard/>
            </Box>
        </>
    );
}

export default Categories;