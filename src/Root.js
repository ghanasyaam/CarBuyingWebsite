import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Quote from './Pages/Homepage/Quote';
import Home from './Pages/UserAuthentication/Home';
import Login from './Pages/UserAuthentication/Login';
import Signup from './Pages/UserAuthentication/Signup';
import Admin from './Pages/Admin/Admin';

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Root;