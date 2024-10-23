import MinhPic from '../../assets/MinhPicture.jpg'
import { Typography,Box} from '@mui/material';

function MinhPicture (){
    return (
          <Box sx={{ flex: '1 1 50%', maxWidth: '578px', height: '432px', overflow: 'hidden', marginTop:'70px', marginLeft: '50px'}}> {/*Any overflow from image clipped/hidden */}
            <img
              src={MinhPic}
              alt="House 1"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} //Cover means image fill up available space while maintaining aspect ratio
            />
          </Box>
      );
}

export default MinhPicture