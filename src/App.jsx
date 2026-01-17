import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Menu from './components/Menu';
import Header from './components/Header';
import NotFound from './pages/NotFound';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/settings" element={<Settings />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Menu />
    </div>
  );
}

export default App
