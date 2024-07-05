import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Courses from './Courses/Courses.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Home" element={<App />} />
        <Route path="Courses" element={<Courses />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
