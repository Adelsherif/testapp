import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import AdPage from './AdPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shap/1" element={<AdPage id="1" />} />
      <Route path="/shap/2" element={<AdPage id="2" />} />
      <Route path="/shap/3" element={<AdPage id="3" />} />
    </Routes>
  );
}

export default App;
