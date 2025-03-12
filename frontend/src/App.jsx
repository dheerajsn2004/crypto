import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';
import Inbox from './components/Inbox';
import SentBox from './components/SentBox';
import DraftBox from './components/DraftBox';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import Report from './components/Report';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/main" element={<MainPage />} />
        <Route path="/inbox" element={<Inbox />} exact />
        <Route path="/inbox/sent" element={<SentBox />} />
        <Route path="/inbox/draft" element={<DraftBox />} />
        <Route path="/portfolio" element={<Portfolio />} exact />
        <Route path="/portfolio/project/:projectNumber" element={<Project />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </Router>
  );
}

export default App;