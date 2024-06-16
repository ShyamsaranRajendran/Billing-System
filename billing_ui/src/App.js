import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/header';
import Footer from './component/Footer/footer';
import Land from './component/landing';
import User from './component/User/UserDash';
import Dashboard from './component/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/user" element={<User />} /> 
          <Route path="/" element={<Land />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
