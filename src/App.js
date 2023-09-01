import React from "react";
import "./App.css";
import CircleImage from "./components/CircleImage";
import Nav from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
