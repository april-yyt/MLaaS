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

const handleClickBuy = () => {
    console.info('You clicked the Chip.');
  };

const handleClickWithdraw = () => {
    console.info('You clicked the Chip.');
  };
  

const commonStyles = {
    bgcolor: 'background.paper',
    m: 1,
    border: 1,
    width: '5rem',
    height: '5rem',
  };

export default function MLCoin() {
  return (
    <Card sx={{ minWidth: 275 }} >
    <CardContent >
    <Grid
        container
        spacing={2}
        justifyItems="flex-end"
        style={{ margin: "20px" }}
        
      >

      <List sx={{marginLeft:5}}>
      <Typography sx={{ fontSize: 16 }} color="text.secondary" >
        ML Coin Balance
      </Typography>
      <Typography sx={{ fontSize: 20 }} color="text.primary">
        $1580.20
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="deepPurple">
        =13.16 ML Coins
      </Typography>
      </List>

      <Chip 
          label="Buy MLCoin"
          onClick={handleClickBuy}
          sx={{marginTop:2, marginLeft:85}}
        />
        <Chip sx={{marginLeft:2, marginTop:2}}
          label="Withdraw MLCoin"
          onClick={handleClickWithdraw}
          variant="outlined"
        />

      
    </Grid>
    </CardContent>

  </Card>
  );
}