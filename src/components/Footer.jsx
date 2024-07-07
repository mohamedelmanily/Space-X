import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMessage } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-gray-800 ">
      <section className="max-w-[1200px] mx-auto text-white">
        <div className=" grid md:grid-cols-3 py-5">
          {/* first column */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
              Be Ready To Grow
            </h1>
            <p className="text-gray-400">
              Get exclusive{" "}
              <span className=" text-white font-bold "> best update</span>{" "}
              straight to your inbox.{" "}
            </p>
            <br />
            <div className="flex items-center h-10">
              <input
                className="py-1 px-3 border-blue-800 w-full h-[100%] inline-block focus:outline-none bg-gray-800  border-[1px] "
                type="text"
                placeholder="Email"
              />
              <button className="bg-blue-800 hover:bg-blue-500/75 h-full inline-block py-2 px-6 text-white">
                Ok
              </button>
            </div>
          </div>
          {/* Second column */}

          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3 `}>
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">About</li>
                  <li className="cursor-pointer">Services</li>
                  <li className="cursor-pointer">Login</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3 ">
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">About</li>
                  <li className="cursor-pointer">Services</li>
                  <li className="cursor-pointer">Login</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Contact Us
                </h1>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <HiLocationMarker />
                    <p>Sharqia, Egypt</p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <MdMessage />
                    <p>mphamedelmanily123@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <MdCall />
                    <p>01119640792</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="flex justify-between items-center text-center py-6 border-t-2 border-gray-300/40">
            <span className="text-sm text-gray-400">
              @copyright 2024 Mohamed Elmanily
            </span>
            <div className="flex items-center justify-center gap-4 mb-4">
              <a target="_blank" href="https://www.linkedin.com/in/mohamed-elmanily-8989111b9/">
                <FaLinkedin className="text-4xl" />
              </a>
              <a target="_blank" href="https://www.facebook.com/profile.php?id=100013727589298">
                <FaFacebook className="text-4xl" />
              </a>
              <a target="_blank" href="https://github.com/mohamedelmanily">
                <FaGithub className="text-4xl" />
              </a>
            </div>

            <span className="text-sm text-gray-400 ">
              <ul className="flex gap-3">
                <li className="hover:text-white">Privacy Policy</li>
                <li className="hover:text-white">Terms & Conditions</li>
              </ul>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
