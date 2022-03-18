import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Update } from './pages';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </Router>
  );
};

export default App;
