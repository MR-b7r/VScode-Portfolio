import React from "react";
import { ProjectInfo } from "./ProjectInfo";
import { Helmet, HelmetProvider } from "react-helmet-async";
const Projects = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Haitham B7R | Projects</title>
      </Helmet>
      <div className="bg-mainBg p-8 flex flex-col justify-center md:justify-normal">
        <h1 className="pb-5 text-3xl text-textColor">
          Stuff of builded Projects{" "}
        </h1>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 w-4/6 md:w-full self-center">
          {ProjectInfo.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-2 items-start text-textColor cursor-pointer rounded-t-3xl bg-articleBg rounded-b-2xl "
            >
              <img
                src={card.image}
                className="w-full h-[220px] rounded-3xl  "
              />
              <div className="px-3 flex flex-col gap-y-2 p-2">
                <span className="font-bold text-[18px] text-accentColor">
                  {card.title}
                </span>
                <p className="font-normal text-[14px] tracking-wider">
                  {card.description}
                </p>
              </div>
              <ul className="flex items-center mx-3 flex-wrap">
                {card.tags.map((tag) => (
                  <li
                    key={tag}
                    className="my-1 mr-1 rounded-full text-[15px] overflow-hidden border-2 border-purple-600 focus:outline-none"
                  >
                    <a className="py-[3px] px-[5px] text-textColor bg-articleBg hover:bg-purple-600 transition-all duration-200 ease-in ">
                      {tag}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center space-x-3 px-3 py-2">
                <a
                  href={card.sourceCode}
                  target="_blank"
                  className=" px-1 py-1  font-semibold underline decoration-accentColor hover:bg-accentColor text-[15px]"
                >
                  Source Code
                </a>
                <a
                  href={card.demo}
                  target="_blank"
                  className="  px-1 py-1 font-semibold underline  decoration-accentColor hover:bg-accentColor text-[15px]"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Projects;
