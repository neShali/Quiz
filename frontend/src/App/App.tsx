import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Layout from './Layout';
import Login from '../features/login/Login';
import Registration from '../features/login/Registration';
import Themes from '../features/themes/Themes';
import Static from '../features/static/Static';
import * as apiStatic from '../features/static/apiStatic'
import { selectAuthChecked } from '../features/login/selectors';
import { userChecked } from '../features/login/actionsCreators'
import * as loginApi from '../features/login/loginApi'

function App(): JSX.Element {
  const dispatch = useDispatch();
  
  const authChecked = useSelector(selectAuthChecked)
  
  useEffect(() => {
    loginApi.checkUser().then((result) => {
      dispatch(userChecked(result.isLoggedIn ? result.user : undefined));
    })
  }, [dispatch]);

    useEffect(() => {
     apiStatic.loadStaticUsers().then((loadStaticUsers) => 
     dispatch({ type: 'static/loadStaticUsers', payload: loadStaticUsers }));
   }, [dispatch]);

   if(!authChecked) {
    return (
      <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    );
   }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Themes />} />
        <Route path="/static" element={<Static />}/>
        <Route path="/registration" element={<Registration />}/>
        <Route />
      </Route>
    </Routes>
  );
}

export default App;
