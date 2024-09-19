// @ts-ignore
import "./App.css";
import Home from "./pages/Home";
import SupportPage from "./pages/SupportPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
