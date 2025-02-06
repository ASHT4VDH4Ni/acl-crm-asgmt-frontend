import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CustomerDetails from "./Pages/CustomerDetails";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer/:id" element={<CustomerDetails />} />
      </Routes>
    </Router>
  );
};

export default App;

