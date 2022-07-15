import React from "react";
import { Home } from "./pages/Home";
import About from "./pages/About";
import Collaborators from "./pages/Collaborators";
import AppBar from "./components/app_bar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Timeline from "./pages/timeline";
import Contact from "./pages/contact";
import Instruments from "./pages/instruments";
import Links from "./pages/links";
import Publications from "./pages/publications";

export function App() {
  return (
    <Router>
      <div className="App">
        <AppBar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/collaborators" element={<Collaborators />} />
          <Route path="/instruments" element={<Instruments />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/links" element={<Links />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
