// import logo from './logo.svg';
// import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard';
// import { useState } from "react";

function App() {
  
  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />


        </Routes>
      </BrowserRouter>
    </>
  )
  
}

export default App;
