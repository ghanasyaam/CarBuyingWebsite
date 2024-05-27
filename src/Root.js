import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Quote from './Pages/Homepage/Quote';
import AdminPage from './Pages/AdminPage/AdminPage';
import Home from './Pages/UserAuthentication/Home';
import Login from './Pages/UserAuthentication/Login';
import Signup from './Pages/UserAuthentication/Signup';
import Overview from './Pages/Overview/Overview';
import LoanCalculator from './Pages/Overview/emi';
import Summary from './Pages/Summary/summary';

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path='/Overview' element={<Overview/>}/>
        <Route path='/Overview/LoanCalculator' element={<LoanCalculator/>}/>
        <Route path='/Summary' element={<Summary/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Root;