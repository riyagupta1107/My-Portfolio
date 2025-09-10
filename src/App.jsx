import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

function App() {
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const expRef = useRef(null);

  return (
    <>
      <Router>
      <NavBar projectRef={projectRef} skillsRef={skillsRef} expRef={expRef}/>
        <Routes>
          <Route path="/" element={<Home projectRef={projectRef} skillsRef={skillsRef} expRef={expRef}/>} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
