import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Browse from './pages/browse';
import Authentication from './hooks/authentication';
function App() {
  const {user} = Authentication();
  return (
    <Router>
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
        <Route path='browse' element={<Browse />} />
      </Routes>
    </Router>    
  )
}

export default App;
