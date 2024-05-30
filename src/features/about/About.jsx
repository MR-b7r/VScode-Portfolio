import React from "react";
import react_icon from "../../assets/icons/react_icon.svg";
import html_icon from "../../assets/icons/html_icon.svg";
import css_icon from "../../assets/icons/css_icon.svg";
import js_icon from "../../assets/icons/js_icon.svg";
import nextjs_icon from "../../assets/icons/nextjs-icon.svg";
import ts_icon from "../../assets/icons/typescript-icon.svg";
import tailwind_icon from "../../assets/icons/tw-icon.svg";
import supabase_icon from "../../assets/icons/supabase_icon.svg";

import { Helmet, HelmetProvider } from "react-helmet-async";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
const leftAnimationVar = {
  initial: { opacity: 0, x: -100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};
const bottomAnimationVar = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const fadeInAnimationVar = {
  initial: { opacity: 0, y: 30 },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * index, duration: 0.3 },
  }),
};
const About = () => {
  const progLang = [
    html_icon,
    css_icon,
    js_icon,
    ts_icon,
    tailwind_icon,
    react_icon,
    nextjs_icon,
    supabase_icon,
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>Haitham B7R | About</title>
      </Helmet>
      <div className="flex flex-col text-textColor px-5 pt-5">
        <div className="flex flex-col md:flex-row items-center justify-between mb-5 md:px-11 px-0">
          <motion.div
            className="items-center md:mb-0 mb-3"
            variants={leftAnimationVar}
            initial="initial"
            animate="animate"
          >
            <h1 className="md:text-[45px] sm:text-[35px] text-[28px] font-bold text-stone-100">
              Front-End <br />
              <span className="text-blue-500">React</span> Developer
            </h1>
            <p className="sm:text-[20px] text-[16px] font-normal text-stone-100">
              Hello There, I’m Hitham Bahr.
              <br /> junior Web Developer with React
            </p>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                " Site: Egypt, Alex",
                1000,
              ]}
              speed={40}
              repeat={Infinity}
              className="sm::text-lg text-[16px]"
            />
          </motion.div>

          <div className="flex items-center flex-col md:mr-5 mr-0 sm:ml-5">
            <h2 className="md:text-[45px] sm:text-[35px] text-[28px]  font-bold self-center text-accentColor">
              SKills
            </h2>
            <div className="flex flex-wrap">
              {progLang.map((lang, index) => (
                <motion.img
                  src={lang}
                  alt="Skill"
                  key={index}
                  className="sm:h-14 sm:w-14 w-10 h-10 cursor-pointer border-2 border-accentColor rounded-full p-2 ml-2 mb-2"
                  variants={fadeInAnimationVar}
                  initial="initial"
                  animate="animate"
                  custom={index}
                ></motion.img>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="flex items-center flex-col my-8"
          variants={bottomAnimationVar}
          initial="initial"
          animate="animate"
        >
          <h1 className="text-2xl font-semibold text-accentColor xl:text-3xl mb-2">
            About Me
          </h1>
          <div className="text-base xsm:text-lg font-base leading-[20px] tracking-wider text-slate-200 xl:text-xl md:max-w-[70%] w-full ">
            I’m an enthusiastic and detail-oriented Frontend Software Developer
            seeking an entry-level position. My passion lies in coding, make
            responsive websites with high-end Design, and contributing to the
            timely completion of projects.
            <br />
            <p className=" relative w-[90%] mb-1 mt-3 font-bold text-[14px]  md:text-[16px] text-accentColor">
              Skilled in creating responsive and visually appealing designs.
              <span className="absolute top-0 right-full text-textColor font-bold text-[25px] ">
                -
              </span>
            </p>
            <p className=" relative w-[90%] mb-1 mt-3 font-bold text-[14px]  md:text-[16px] text-accentColor">
              Experienced in building dynamic user interfaces and managing
              state.
              <span className="absolute top-0 right-full text-textColor font-bold text-[25px] ">
                -
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </HelmetProvider>
  );
};

export default About;
