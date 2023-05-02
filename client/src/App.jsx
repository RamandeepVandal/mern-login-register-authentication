// react-router
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// pages
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ClientPage } from './pages/ClientPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />}/>
        <Route exact path='/register' element={<Register />}/>
        <Route exact path='/client' element={<ClientPage />} />
      </Routes>
    </Router>
  )
}

export default App
