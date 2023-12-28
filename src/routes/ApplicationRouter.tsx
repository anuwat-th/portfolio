import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const ApplicationRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default ApplicationRouter;
