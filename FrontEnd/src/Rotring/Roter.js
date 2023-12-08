// Routering.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from '../Component/Page/Register/Register';
import Login from '../Component/Page/Login/Login';
import Users from '../Component/Page/User/Users';
import { AuthProvider } from '../Context/Authentication';

export default function Routering() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
