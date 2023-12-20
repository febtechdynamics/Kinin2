import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <button className="btn btn-primary">Primary</button>
      <Navbar />
    </Router>
  );
}

export default App;
