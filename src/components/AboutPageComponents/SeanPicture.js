import SeanPic from '../../assets/SeanPicture.jpg'
import { Typography,Box} from '@mui/material';

function SeanPicture (){
    return (
          <Box sx={{ flex: '1 1 50%', maxWidth: '578px', height: '432px', overflow: 'hidden', marginTop:'70px'}}> {/*Any overflow from image clipped/hidden */}
            <img
              src={SeanPic}
              alt="House 1"
              style={{ width: '100%', height: '100%', objectFit: 'cover', marginLeft: '40px' }} //Cover means image fill up available space while maintaining aspect ratio
            />
          </Box>
      );
}

export default SeanPicture;