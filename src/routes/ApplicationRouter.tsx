import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import WorkPage from '../pages/WorkPage';
import BlogPage from '../pages/BlogPage';
import ContractPage from '../pages/ContractPage';

import RyuzuWorkPage from '../pages/RyuzuWorkPage';
import GottyWorkPage from '../pages/GottyWorkPage';
const ApplicationRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contract" element={<ContractPage />} />

        <Route path="/ryuzu-work" element={<RyuzuWorkPage />} />
        <Route path="/gotty-work" element={<GottyWorkPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default ApplicationRouter;
