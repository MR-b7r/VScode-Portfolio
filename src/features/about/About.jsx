import React from "react";
import react_icon from "../../assets/icons/react_icon.svg";
import html_icon from "../../assets/icons/html_icon.svg";
import css_icon from "../../assets/icons/css_icon.svg";
import js_icon from "../../assets/icons/js_icon.svg";
import tailwind_icon from "../../assets/icons/tw-icon.svg";
import supabase_icon from "../../assets/icons/supabase_icon.svg";
import { Helmet, HelmetProvider } from "react-helmet-async";
const About = () => {
  const progLang = [
    html_icon,
    css_icon,
    js_icon,
    react_icon,
    tailwind_icon,
    supabase_icon,
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>Haitham B7R | About</title>
      </Helmet>
      <div className="flex flex-col text-textColor px-5 pt-5">
        <div className="flex flex-col md:flex-row items-center justify-between mb-5 md:px-11 px-0">
          <div className="items-center md:mb-0 mb-3">
            <h1 className="md:text-[45px] text-[35px] font-bold text-stone-100">
              Front-End <br />
              <span className="text-blue-500">React</span> Developer
            </h1>
            <p className="text-[20px] font-normal text-stone-100">
              Hello There, I’m Hitham Bahr.
              <br /> junior Web Developer with React
            </p>
            <p className="text-lg">
              Site: <span className="text-accentColor">Egypt, Alex</span>
            </p>
          </div>

          <div className="flex items-center flex-col md:mr-5 mr-0">
            <h2 className="text-[38px] font-bold self-center text-accentColor">
              Skills
            </h2>
            <div className="flex">
              {progLang.map((lang, i) => (
                <img
                  src={lang}
                  alt="Skill"
                  key={i}
                  className="xsm:h-14 xsm:w-14 w-10 h-10 cursor-pointer border-2 border-accentColor rounded-full p-2 ml-2"
                ></img>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center flex-col mb-5">
          <h1 className="text-2xl font-semibold text-accentColor xl:text-3xl mb-2">
            About me
          </h1>
          <div className="text-medium xsm:text-lg font-base leading-[20px] tracking-wider text-slate-200 xl:text-xl md:max-w-[70%] w-full ">
            I’m an enthusiastic and detail-oriented Frontend Software Developer
            seeking an entry-level position. My passion lies in coding, make
            responsive websites with high-end Design, and contributing to the
            timely completion of projects.
            <br />
            <p className="mb-1 mt-3 font-bold text-[16px] text-accentColor">
              Skilled in creating responsive and visually appealing designs.
            </p>
            <p className="font-bold text-[16px] text-accentColor">
              Experienced in building dynamic user interfaces and managing
              state.
            </p>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default About;
