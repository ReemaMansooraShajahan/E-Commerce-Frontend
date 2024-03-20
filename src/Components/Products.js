import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions,Grid } from '@mui/material';

export default function Products() {
  return (
    
      <div 
      className="Card" 
      style={{ 
      paddingTop: '300px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '50px', 
      }} 
      > 
      <Grid container spacing={3}> 
      {/* First Row */} 
      <Grid item xs={6} sm={3}> 
      <Card sx={{ maxWidth: 345,borderRadius:'30px',marginBottom:'80px' ,marginRight:'30px'}}> 
      <CardActionArea> 
      <CardMedia 
      component="img" 
      height="200" 
      image='https://m.media-amazon.com/images/I/51ZlTi5UKgL._AC_UF1000,1000_QL80_.jpg' 
      alt="C " 
      /> 
      <CardContent> 
      <Typography gutterBottom variant="h5" component="div"> 
      Tablet
      </Typography> 
      </CardContent> 
      </CardActionArea> 
      <CardActions>
      <a href="/Tablet"><Button sx={{fontSize:'20px',fontFamily:'revert-layer',color:"#012169"}} size="small" color="primary"> 
      View Product 
      </Button></a> 
      </CardActions> 
      </Card> 
      </Grid> 
      <Grid item xs={6} sm={3}> 
      <Card sx={{ maxWidth: 345,borderRadius:'30px',marginRight:'30px'  }}> 
      <CardActionArea> 
      <CardMedia 
      component="img" 
      height="200" 
      image='https://5.imimg.com/data5/YR/DY/FR/SELLER-18983365/hp-15-intel-core-i5-full-hd-laptop-500x500.jpg' 
      alt="C " 
      /> 
      <CardContent> 
      <Typography gutterBottom variant="h5" component="div"> 
      HP Laptop
      </Typography> 
      </CardContent> 
      </CardActionArea> 
      <CardActions> 
      <a href="/java"><Button sx={{fontSize:'20px',fontFamily:'revert-layer',color:"#012169"}} size="small" color="primary"> 
      View Product
      </Button></a> 
      </CardActions>
      </Card> 
      </Grid> 
      
      {/* Second Row */} 
      
      <Grid item xs={6} sm={3}> 
      <Card sx={{ maxWidth: 345 ,borderRadius:'30px' ,marginRight:'30px'}}> 
      <CardActionArea> 
      <CardMedia 
      component="img" 
      height="200" 
      image='https://m.media-amazon.com/images/I/61CorIpO46S.jpg' 
      alt="C " 
      /> 
      <CardContent> 
      <Typography gutterBottom variant="h5" component="div"> 
       Speaker 
      </Typography> 
      </CardContent> 
      </CardActionArea> 
      <CardActions> 
      <a href="/python"><Button sx={{fontSize:'20px',fontFamily:'revert-layer',color:"#012169"}} size="small" color="primary"> 
      View Product 
      </Button></a> 
      </CardActions> 
      </Card> 
      </Grid> 
      <Grid item xs={6} sm={3}> 
      <Card sx={{ maxWidth: 345,borderRadius:'30px',marginRight:'30px'  }}> 
      <CardActionArea> 
      <CardMedia 
      component="img" 
      height="200" 
      image='https://5.imimg.com/data5/WE/IU/MY-2995572/compaq-18-5-inch-hd-desktop-computer-500x500.jpg' 
      alt="C "
      /> 
      <CardContent> 
      <Typography gutterBottom variant="h5" component="div"> 
      Computer
      </Typography> 
      </CardContent> 
      </CardActionArea> 
      <CardActions> 
      <a href="/react"><Button sx={{fontSize:'20px',fontFamily:'revert-layer',color:"#012169"}} size="small" color="primary"> 
      View Product 
      </Button></a> 
      </CardActions> 
      </Card> 
      </Grid> 
      {/* Third Row */} 
      <Grid item xs={6} sm={3}> 
      <Card sx={{ maxWidth: 345 ,borderRadius:'30px',marginBottom:'80px',marginRight:'30px' }}> 
      <CardActionArea> 
      <CardMedia 
      component="img" 
      height="200" 
      image='https://rukminim2.flixcart.com/image/850/1000/kevpwnk0/keyboard/desktop-keyboard/n/s/h/tvs-champ-hd-original-imafvgwswuhnwnu6.jpeg?q=90&crop=false' 
      alt="C " 
      /> 
      <CardContent> 
      <Typography gutterBottom variant="h5" component="div"> 
      Charger
      </Typography> 
      </CardContent> 
      </CardActionArea> 
      <CardActions> 
      <a href="/php"><Button sx={{fontSize:'20px',fontFamily:'revert-layer',color:"#012169"}} size="small" color="primary"> 
      View Product
      </Button></a> 
      </CardActions> 
      </Card> 
      </Grid> 
      <Grid item xs={6} sm={3}> 
      <Card sx={{ maxWidth: 345,borderRadius:'30px',marginRight:'30px'  }}> 
      <CardActionArea> 
      <CardMedia 
      component="img" 
      height="200" 
      image='https://www.kindpng.com/picc/m/137-1373313_computer-mouse-hd-png-download.png' 
      alt="C " 
      /> 
      <CardContent> 
      <Typography gutterBottom variant="h5" component="div"> 
      Mouse 
      </Typography> 
      </CardContent> 
      </CardActionArea> 
      <CardActions> 
      <a href="/bootstrap"><Button sx={{fontSize:'20px',fontFamily:'revert-layer',color:"#012169"}} size="small" color="primary"> 
      View Product
      </Button></a> 
      </CardActions> 
      </Card> 
      </Grid> 
      <Grid item xs={6} sm={3}> 
      <Card sx={{ maxWidth: 345,borderRadius:'30px' ,marginRight:'30px' }}>
      <CardActionArea> 
      <CardMedia 
      component="img" 
      height="200" 
      image='https://m.media-amazon.com/images/I/61BmOixtr6L._AC_UF1000,1000_QL80_.jpg' 
      alt="C " 
      /> 
      <CardContent> 
      <Typography gutterBottom variant="h5" component="div"> 
      Charger
      </Typography> 
      </CardContent> 
      </CardActionArea> 
      <CardActions> 
      <a href="/angular"><Button sx={{fontSize:'20px',fontFamily:'revert-layer',color:"#012169"}} size="small" color="primary"> 
      View Product
      </Button></a> 
      </CardActions> 
      </Card> 
      </Grid> 
      <Grid item xs={6} sm={3}> 
      <Card sx={{ maxWidth: 345,borderRadius:'30px' ,marginRight:'30px' }}> 
      <CardActionArea> 
      <CardMedia 
      component="img" 
      height="200" 
      image='https://i0.wp.com/www.easyshoppi.com/wp-content/uploads/2020/07/san11.jpg?fit=813%2C1000&ssl=1' 
      alt="C " 
      
      /> 
      <CardContent> 
      <Typography gutterBottom variant="h5" component="div"> 
     Pendrive
      </Typography> 
      </CardContent> 
      </CardActionArea> 
      <CardActions> 
      <a href="/typescript"><Button sx={{fontSize:'20px',fontFamily:'revert-layer',color:"#012169"}} size="small" color="primary"> 
     View Product
      </Button></a> 
      </CardActions> 
      </Card> 
      </Grid> 
      </Grid> 
      </div> 
      ); 
      }