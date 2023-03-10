import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Chip, Stack } from '@mui/material';
import ModalTwo from './modalTwo';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
    component="img"
    style={{height:'180px'}}
    src={require('../../img/galleri6.jpg')}
    alt="Paella dish"
  />
  <CardHeader
    avatar={
      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        JP  
      </Avatar>
    }
    title={
        <Typography sx={{ fontSize: 18, color:'#3C9FE1' }}>
            VR Med Kemi Og MoleKyler
        </Typography>
    }
  />
  
  <CardContent>
    <Typography sx={{ fontSize: 16}} variant="body2" color="text.secondary">
      This impressive paella is a perfect party dish and a fun meal to cook
      together with your guests. Add 1 cup of frozen peas along with the mussels,
      if you like.
    </Typography>
    <Box sx={{ m: 2 , pt:1}}>
        <Stack direction="row" spacing={1}>
          <Chip label="VR" />
          <Chip color="primary" label="Kemi" />
          <Chip label="AR" />
          <Chip color="primary" label="Tech" />
        </Stack>
      </Box>
    <hr></hr>
    <Typography sx={{ fontSize: 14, color:'#3C9FE1' }}>
       September 14, 2016
    </Typography>
  </CardContent>
  <CardActions disableSpacing>
    <IconButton aria-label="add to favorites">
      <DarkModeIcon sx={{fontSize:30, color:'orange'}} />
    </IconButton>
    <ModalTwo/>
    <ExpandMore
      expand={expanded}
      onClick={handleExpandClick}
      aria-expanded={expanded}
      aria-label="show more"
    >
      <ExpandMoreIcon />
    </ExpandMore>
  </CardActions>
  <Collapse in={expanded} timeout="auto" unmountOnExit>
    <CardContent>
      <Typography paragraph>Method:</Typography>
      <Typography paragraph>
        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
        large plate and set aside, leaving chicken and chorizo in the pan. Add
        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
        stirring often until thickened and fragrant, about 10 minutes. Add
        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
      </Typography>
      <Typography>
        Set aside off of the heat to let rest for 10 minutes, and then serve.
      </Typography>
    </CardContent>
  </Collapse>
</Card>
  );
}