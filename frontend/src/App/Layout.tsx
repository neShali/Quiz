import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

function Layout(): JSX.Element {
  const score = useSelector((state: RootState) => state.themes.score);

  const navigate = useNavigate();

  const handlerLogin = (): void => {
    navigate('/login');
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link style={{ color: 'white' }} to="/">
                Квиз
              </Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Ваш счёт: {score}
            </Typography>
            <Button color="inherit" onClick={handlerLogin}>
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
