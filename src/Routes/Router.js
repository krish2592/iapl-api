import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Users/Home';
import Login from '../Users/Login';
import Register from '../Users/Register';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>
);

export default AppRoutes;