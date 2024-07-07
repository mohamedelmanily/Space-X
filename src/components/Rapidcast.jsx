import React from "react";
import satelite from "../assets/satelite1-9FDVE2Hv.jpg";

const Rapidcast = () => {
  return (
    <div className=" flex flex-wrap items-center bg-black container mx-auto pt-[150px]">
      <div className="sm:flex-1 ">
        <img data-aos='zoom-in' src={satelite} alt="Satelite" className="w-full sm:w-[85%] mx-auto py-8" />
      </div>
      <div className="flex-1 w-full text-white space-y-3 xl:pr-36 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 p-4 sm:p-8">
        <p data-aos='fade-up' data-aos-delay='300' className="text-blue-700">OUR MISSION</p>
        <h1 data-aos='fade-up' data-aos-delay='300' className="text-5xl font-normal">RAPIDCAST</h1>
        <p data-aos='fade-up' data-aos-delay='500'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestiae
          reprehenderit expedita corporis, non doloremque. Consequatur
          consectetur quisquam qui sunt. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eos molestiae reprehenderit expedita corporis, non
          doloremque. Consequatur consectetur quisquam qui sunt.
        </p>
        <button data-aos='fade-up' data-aos-delay='700' className="bg-cyan-500 hover:bg-cyan-400 py-2 px-4 rounded">Learn More</button>
      </div>
    </div>
  );
};

export default Rapidcast;
