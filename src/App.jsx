import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Signup from './Components/SignUp';
import Edit from './Components/Edit';

const cred=[
  {roll:10101 , password:1} ,{ roll:10102 , password:2}, {roll:10103 , password:3} , {roll:10104 , password:4}
]

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login cred={cred}/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/edit" element={<Edit />} />
        {/* Redirect to login if the path is not found */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;