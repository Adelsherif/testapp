import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdPage from "./AdPage";
import Home from "./Home";

function App() {
  return (
    <Router basename="/testapp">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shap/:id" element={<AdPage />} />
      </Routes>
    </Router>
  );
}

export default App;
