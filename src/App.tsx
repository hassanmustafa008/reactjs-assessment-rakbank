import React from "react";
import Logo from "./assets/Logo.svg";
import "./App.css";
import VerticalCarousel from "./components/VerticalCarousel";

function App() {
  return (
    <div className="App">
      <div className="brand">
        <img src={Logo} alt="Logo" className="absolute h-8 m-3 z-10" />
      </div>
      <VerticalCarousel />
    </div>
  );
}

export default App;
