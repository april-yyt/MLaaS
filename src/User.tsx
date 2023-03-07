import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Grid, List } from '@mui/material';
import Typography from '@mui/material/Typography';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Chip from '@mui/material/Chip';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const handleClick = () => {
  console.info('You clicked the Chip.');
};

export default function User() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent >
      <Grid
          container
          spacing={2}
          justifyItems="flex-end"
          style={{ margin: "20px" }}
        >
        <Avatar sx={{ bgcolor: deepOrange[500], marginTop:2  }}>JD</Avatar>

        <List sx={{marginLeft:5}}>
        <Typography sx={{ fontSize: 22 }} color="text.primary" >
          Name: John Doe
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary">
          Email: johndoe@berkeley.edu
        </Typography>
        </List>

        <Chip 
          label="Custom icon"
          onClick={handleClick}
          deleteIcon={<DoneIcon />}
          sx={{marginTop:2, marginLeft:73}}
        />
        <Chip sx={{marginLeft:2, marginTop:2}}
          label="Custom icon"
          onClick={handleClick}
          deleteIcon={<DeleteIcon />}
          variant="outlined"
        />

      </Grid>
      </CardContent>

    </Card>
  );
}