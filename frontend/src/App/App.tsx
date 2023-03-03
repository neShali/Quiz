import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import Layout from './Layout';
import Login from '../features/login/Login';
import Themes from '../features/themes/Themes';
import Static from '../features/static/Static';
import * as apiStatic from '../features/static/apiStatic'

function App(): JSX.Element {
  const dispatch = useDispatch();
  
    useEffect(() => {
     apiStatic.loadStaticUsers().then((loadStaticUsers) => 
     dispatch({ type: 'static/loadStaticUsers', payload: loadStaticUsers }));
   }, [dispatch]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Themes />} />
        <Route path="/static" element={<Static />}/>
        <Route />
        <Route />
      </Route>
    </Routes>

  );
}

export default App;
