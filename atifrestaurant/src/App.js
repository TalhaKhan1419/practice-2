import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './commons/navbar';  // Adjust the import path as necessary
import Homepage from './Home/homeScreen';
import Menu from './menu/menu';
import Signup from './user/signup';
import Login from './user/login';  // Import the Login component

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
         
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />  {/* Add login route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

