import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications'
import ResponsiveAppBar from './AppBar.tsx'
import VeriList from './Veri_List.tsx'
import MLCoin from './MLCoin.tsx';
import User from './User.tsx';



function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://toppa.berkeley.edu/">
          Toppa @ Berkeley
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }

const mdTheme = createTheme();
const drawerWidth: number = 240;


function Profile() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
      setOpen(!open);
    };
  
    return (
      <ThemeProvider theme={mdTheme}>
        <ResponsiveAppBar />
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3} >
                {/* User Info */}
                <Grid item xs={12} >
                {/* <Paper sx={{p: 2, display: 'flex', flexDirection: 'column', height: 240,}}> */}
                    <User />
                  {/* </Paper> */}
                </Grid>
                {/* ML Coin Balance */}
                <Grid item xs={12} >
                  {/* <Paper sx={{p: 2, display: 'flex', flexDirection: 'column', height: 240,}}> */}
                    <MLCoin />
                  {/* </Paper> */}
                </Grid>
                {/* Verifications */}
                <h2>Account Verification</h2>
                <Grid item xs={12}>
                    <VeriList />
                </Grid>
              </Grid>
              <Copyright sx={{ pt: 4 }} />
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    );
  }
  
  export default function Dashboard() {
    return <Profile />;
  }