import React from "react";
import { Link } from "react-router-dom";
import Illustration from "./Illustration";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Haitham B7R | Home</title>
      </Helmet>
      <div className="relative items-center justify-start flex flex-col lg:flex-row overflow-hidden min-h-[85vh] ">
        <div className="absolute xsm:block hidden left-8 font-extrabold leading-none md:text-[10rem] text-[7rem] tracking-wider text-bgText">
          <h1 className="uppercase">
            I Provide <br /> Service
          </h1>
        </div>
        <div className="flex flex-col z-20 sm:ml-20 items-start mb-10 lg:mb-0">
          <div className="flex flex-col  items-start ">
            <h2 className="sm:text-[50px] text-[40px] font-black text-stone-200 mb-2">
              Haitham Bahr
            </h2>
            <p className="font-bold text-[25px] sm:text-[35px] text-stone-300">
              Front End Web Developer
            </p>
          </div>
          <div className="xsm:self-start self-center flex xsm:flex-row mt-10 xsm:gap-x-7 flex-col gap-y-4 ">
            <Link
              to="/projects"
              className="md:px-8 px-5 py-3 bg-accentColor border-2 border-accentColor md:text-[20px] text-base self-center"
            >
              <button className="text-center text-white">View Works</button>
            </Link>
            <Link
              to="/contact"
              className="md:px-8 px-5 py-3 border-accentColor border-2 md:text-[20px] text-base self-center hover:bg-accentColor transition duration-200"
            >
              <button className="text-center text-white ">Contact Me</button>
            </Link>
          </div>
        </div>
        <div className=" justify-end items-center ml-10 flex flex-1">
          <Illustration />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Home;
