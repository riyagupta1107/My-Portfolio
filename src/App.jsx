import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

function App() {

  return (
    <>
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/exp" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
