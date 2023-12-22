import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import MyNavbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Header />
      <MyNavbar />
      <Footer />
    </Router>
  );
}

export default App;
