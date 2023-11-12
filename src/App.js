import './App.css';
import React from 'react';
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Detail from './components/detail/Detail';
import About from './components/about/About';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/profile-web-2" element={<><Home/><Detail/><About /></>} />
        <Route path="/" element={<><Home/><Detail/><About /></>} />
        <Route path="/about" element={<><About /></>} />
      </Routes>
    </Router>
  );
}

export default App;
