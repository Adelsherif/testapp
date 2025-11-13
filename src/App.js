import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Home from "./Home";
import AdPage from "./AdPage";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shap/:id" element={<AdPage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
