import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Login from '../features/login/Login';
import Themes from '../features/themes/Themes';
import Static from '../features/static/Static';

function App(): JSX.Element {
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
