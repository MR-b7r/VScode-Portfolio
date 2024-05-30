import React from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Illustration from "./Illustration";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const leftAnimationVar = {
  initial: { opacity: 0, x: -100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};
const rightAnimationVar = {
  initial: { opacity: 0, x: 100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

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
        <motion.div
          className="flex flex-col z-20 sm:ml-20 items-start mb-10 lg:mb-0"
          variants={leftAnimationVar}
          initial="initial"
          animate="animate"
        >
          <div className="flex flex-col  items-start ">
            <h2 className="sm:text-[50px] text-[40px] font-black text-stone-200 mb-2">
              Haitham Bahr
            </h2>
            {/* <p className="font-bold text-[25px] sm:text-[35px] text-stone-300">
              Front End Web Developer
            </p> */}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                "Front End Web Developer",
                1000,
              ]}
              speed={40}
              repeat={Infinity}
              className="font-bold text-[25px] sm:text-[35px] text-stone-300"
            />
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
        </motion.div>
        <motion.div
          className=" justify-end items-center ml-10 flex flex-1"
          variants={rightAnimationVar}
          initial="initial"
          animate="animate"
        >
          <Illustration />
        </motion.div>
      </div>
    </HelmetProvider>
  );
};

export default Home;
