import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link, Outlet, useNavigate } from 'react-router-dom';

function Layout(): JSX.Element {
  const navigate = useNavigate();

  const handlerLogin = (): void => {
    navigate('/login');
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1}}>
        <AppBar position="static" sx={{ flexGrow: 1, backgroundColor: '#8e24aa',}}>
            {/* backgroundColor: '#8e24aa', height: '100px', }}> */}
          <Toolbar sx={{height: '100px',}}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link style={{ color: 'white', fontSize: 50, textShadow: '3px 3px 3px gray', textDecorationLine: 'none', letterSpacing: '5px' }} to="/">
                Квиз
              </Link>
              <Link style={{ color: 'white', margin: 10 }} to="/static">
                Статистика
              </Link>
            </Typography>
            <Button color="inherit" onClick={handlerLogin} sx={{ fontSize: 24, textShadow: '2px 2px 2px gray' }}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Outlet />
    </div>
  );
}

export default Layout;
