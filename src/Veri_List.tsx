import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import GoogleIcon from '@mui/icons-material/Google';
import VerifiedIcon from '@mui/icons-material/Verified';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Divider from '@mui/material/Divider';
import { borderRadius } from '@mui/system';
import { Button } from '@mui/material';

export default function VeriList() {
  return (
    <List
      sx={{
        width: '100%',
        // maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem
      sx={{
        width: '100%',
        borderRadius: 350,
        // maxWidth: 360,
        bgcolor: 'background.paper',
        alignItems: 'center'
      }}
      >
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="ID Verification"
        
        //  secondary="Jan 9, 2014"
          />
        <ListItemAvatar>
            <VerifiedIcon />
        </ListItemAvatar>
        <ListItemText secondary="Verified"/>
        <Button variant="outlined" size='small' sx={{marginRight:2}}>Personal</Button>
        <Button variant="outlined" disabled size='small'>Enterprise </Button>

      </ListItem>

      <Divider variant="inset" component="li" />

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Email"/>
        <ListItemAvatar>
            <CheckCircleOutlineIcon />
        </ListItemAvatar>
        <ListItemText secondary="aprilytyang@gmail.com"/>
        <Button variant="outlined" disabled size='small' sx={{marginRight:2}}>Change</Button>

      </ListItem>

      <Divider variant="inset" component="li" />

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Mobile"/>
        <ListItemAvatar>
            <VerifiedIcon />
        </ListItemAvatar>
        <ListItemText secondary="Unbound"/>
        <Button variant="outlined" size='small' sx={{marginRight:2}}>Bind</Button>

      </ListItem>

      <Divider variant="inset" component="li" />

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <GoogleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="TOTP"/>
        <ListItemAvatar>
            <CheckCircleOutlineIcon />
        </ListItemAvatar>
        <ListItemText secondary="Unbound"/>
        <Button variant="outlined" size='small' sx={{marginRight:2}}>Bind</Button>

      </ListItem>

    </List>
  );
}