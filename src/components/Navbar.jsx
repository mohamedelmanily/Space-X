import React from "react";
import logo from "../assets/logo-2zKhl-C6.png";

const Navbar = () => {
  return (
    <div data-aos='fade-down' className="flex justify-between items-center w-full fixed top-0 right-0 text-white container py-4 max-sm:px-4 backdrop-blur-sm bg-white bg-opacity-5 z-10">
      <div className="flex items-center gap-2">
        <img className="w-10 sm:w-12 md:w-12 lg:w-12" src={logo} alt="logo" />
        <h1 className="text-2xl font-bold">Space-X</h1>
      </div>
      <div>
        <ul className="max-sm:hidden flex gap-6 text-xl ">
          <li>
            <a href="/#">About</a>
          </li>
          <li>
            <a href="/#">Technology</a>
          </li>
          <li>
            <a href="/#">Galaxy</a>
          </li>
          <li>
            <a href="/#">Satelite</a>
          </li>
        </ul>
      </div>
      <button className="border-white border-[2px] border-solid py-1 rounded-md px-3">
        Login
      </button>
    </div>
  );
};

export default Navbar;
