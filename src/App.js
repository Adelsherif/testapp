import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AdPage from "./AdPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/shap/:id" element={<AdPage />} />
      </Routes>
    </Router>
  );
}

export default App;
