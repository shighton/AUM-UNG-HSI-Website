import React from "react";
// import "./app.scss";
import { Home } from "./pages/Home";
import About from "./pages/About";
// import Links from "./screens/Links";
// import Camera from "./screens/Camera";
import Collaborators from "./pages/Collaborators";
// import Contact from "./screens/Contact";
// import Meetings from "./screens/Meetings";
// import Publications from "./screens/Publications";
import AppBar from "./components/app_bar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <Router>
      <div className="App">
        <AppBar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/collaborators" element={<Collaborators />} />
          {/*<Route path="/links" element={<Links />} />
          <Route path="/camera" element={<Camera />} />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/publications" element={<Publications />} /> */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
