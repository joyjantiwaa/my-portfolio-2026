import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // หน้า Gallery กล่องโปรเจกต์ 2 กล่อง
import CaseStudyPortal from './pages/StudentPortalPage';
import LookMixPage from './pages/LookMixAppPage';
import AboutMePage from './pages/AboutMePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student-portal" element={<CaseStudyPortal />} />
        <Route path="/lookmix-app" element={<LookMixPage />} />
        <Route path="/about-me" element={<AboutMePage />} />
      </Routes>
    </Router>
  );
}

export default App;