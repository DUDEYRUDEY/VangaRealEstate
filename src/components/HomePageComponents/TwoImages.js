import React from 'react';
import Box from '@mui/material/Box';
import House1Image1 from '../../assets/HouseImage1.png';
import House2Image2 from '../../assets/HouseImage2.png';

function Images() {
  return (
    <Box sx={{ padding: '40px', display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      <Box sx={{ flex: '1 1 50%', maxWidth: '578px', height: '432px', overflow: 'hidden', marginTop:'70px'}}> {/*Any overflow from image clipped/hidden */}
        <img
          src={House1Image1}
          alt="House 1"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} //Cover means image fill up available space while maintaining aspect ratio
        />
      </Box>
      <Box sx={{ flex: '1 1 50%', maxWidth: '642px', height: '629px', overflow: 'hidden' }}>
        <img
          src={House2Image2}
          alt="House 2"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Cover to fill the space
        />
      </Box>
    </Box>
  );
}

export default Images;
