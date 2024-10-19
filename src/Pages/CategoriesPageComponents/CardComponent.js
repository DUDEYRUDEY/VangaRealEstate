import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="House Prices"
        height="140"
        image="/HomePrice.png"
      />
      <CardContent sx={{ backgroundColor: '#FAFAF5' }}>
        <Typography gutterBottom variant="h5" component="div">
          Melbourne, Vic
        </Typography>
        <Typography variant="body2" sx={{ color: '#426B1F' }}>
          $400,000 - 500,000
        </Typography>
        <Typography variant="h5" sx={{ color: '#6D6D6D' }}>
          Click for more details
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ImgMediaCard;