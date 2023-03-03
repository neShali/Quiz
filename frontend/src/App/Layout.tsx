import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import * as api from '../features/login/loginApi'
import { logoutSuccess } from '../features/login/actionsCreators';

function Layout(): JSX.Element {
  const score = useSelector((state: RootState) => state.themes.score);
  const user = useSelector((state: RootState) => state.login.user);
const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerLogin = (): void => {
    navigate('/login');
  };

  const handlerLogout = (): void => {
    api.logout().then(() => {
      dispatch(logoutSuccess());
      navigate('/')
    })
  };

const handlerRegistration = (): void => {
    navigate('/registration')
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

              <span style={{ marginLeft: '50px' }}>
                {user && `Привет, ${user.name.replace(user.name[0], user.name[0].toUpperCase())}`}
              </span>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {user && `Ваш счёт: ${score}`}
                {user && <Link style={{ color: 'white', margin: 10 }} to="/static">
                Статистика
              </Link>}
              </Typography>
              {user ? 
              <Button color="inherit" onClick={handlerLogout} sx={{ fontSize: 24, textShadow: '2px 2px 2px gray' }}>
              Выйти
             </Button> :
             <>
             <Button color="inherit" onClick={handlerLogin} sx={{ fontSize: 24, textShadow: '2px 2px 2px gray' }}>
              Войти
             </Button>
             <Button color="inherit" onClick={handlerRegistration} sx={{ fontSize: 24, textShadow: '2px 2px 2px gray' }}>
              Регистрация
             </Button>
            </>
               }
          </Toolbar>
        </AppBar>
      </Box>

      <Outlet />
    </div>
  );
}

export default Layout;
