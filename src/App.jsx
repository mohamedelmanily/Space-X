import React, { useEffect } from "react";
import Information from "./components/Information";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Rapidcast from "./components/Rapidcast";
import Rapidcast2 from "./components/Rapidcast2";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(()=>{
    Aos.init({
      duration:1200,
      easing:'ease-in-out'
    }

    )
  },[])
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
