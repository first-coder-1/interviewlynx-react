import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home, Navbar, Footer, Interviewer } from "./components";
import Services from "./components/Services";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interviewer" element={<Interviewer />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
