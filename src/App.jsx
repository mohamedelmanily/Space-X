import React from "react";
import Information from "./components/Information";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Rapidcast from "./components/Rapidcast";
import Rapidcast2 from "./components/Rapidcast2";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Information />
      <Hero/>
      <Rapidcast/>
      <Rapidcast2/>
    <Footer/>
    </div>
  );
};

export default App;
