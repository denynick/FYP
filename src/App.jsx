import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Nav from './components/Nav';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/home';
import AboutUs from './pages/about-us';
import OurDogs from './pages/our-dogs';
import NasaApi from './pages/nasa-api';
import './App.css';

const App = () => {
  const { user } = useAuth(); // Only checking user status, no logout needed

  return (
    <div>
      <BrowserRouter>
        {/* Navigation Bar */}
        <Nav />

        {/* Routes */}
        <Routes>
          <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-dogs" element={<OurDogs />} />
          
          {/* 🔒 Protected Route for NASA API */}
          <Route path="/nasa-api" element={user ? <NasaApi /> : <Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>

      {/* Footer */}
      <footer className="p-4">
        <p>&copy; Natural Disaster Watch</p>
      </footer>
    </div>
  );
};

export default App;
