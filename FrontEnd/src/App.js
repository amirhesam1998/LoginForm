import React from 'react';
import './App.css';
import Register from './Component/Page/Register/Register';
import Login from './Component/Page/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from './Component/Page/User/Users';
function App() {
  return (
    <div>
<div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </div>
    </div>
  );
}

export default App;
