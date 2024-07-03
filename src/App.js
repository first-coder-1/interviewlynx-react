import React from "react";
import { Route, Routes } from "react-router-dom";

import {
  Home,
  Navbar,
  Footer,
  Interviewer,
  HigherEd,
  Blog,
} from "./components";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interviewer" element={<Interviewer />} />
        <Route path="/higher-ed" element={<HigherEd />} />
        <Route path="/blog" element={<Blog />} />
        <Route path=":blogId" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
