import React from "react";
import earthVideo from "../assets/earth.mp4";
import moon from "../assets/moon-surface-hd-9LsGYBww.png";
const Information = () => {
  return (
    <div className="h-[700px] relative">
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 right-0 w-full h-[700px] object-cover z-[-1]"
      >
        <source src={earthVideo} type="video/mp4" />
      </video>
      <div className="absolute lg:w-1/3 top-1/3 left-8 text-white  ">
        <h1 className="text-5xl font-bold mb-4">ORBITE THE EARTH </h1>
        <p className="mb-3 ">
          Space, the vast final frontier, captures humanity's imagination. It's
          an endless expanse where stars, planets, and galaxies dwell. The
          universe's beauty inspires exploration and discovery, prompting us to
          understand our place within it. From distant stars' twinkles to
        </p>
        <button className="bg-cyan-500 hover:bg-cyan-400 py-2 px-4 rounded"> Learn More</button>
      </div>
      <img className="absolute right-0 bottom-0 w-full brightness-50 z-10" src={moon} alt="moon" />
      <div className="absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:h-[60px]"></div>
    </div>
  );
};

export default Information;
