import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home, Navbar } from "./components";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

import "./App.css";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
