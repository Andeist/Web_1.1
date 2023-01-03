import React from "react";
import "./App.css";
import Footer from "./pages/Footer";
import Komedi from "./pages/Komedi";
import Navbar from "./pages/Navbar";
import Button from "./pages/Button";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Komedi/>
      <Button />
      <Footer />
    </div>
  );
};

export default App;
