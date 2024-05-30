import React from "react";
import github_icon from "../../assets/icons/github_icon.svg";
import link_icon from "../../assets/icons/link_icon.svg";

import { motion } from "framer-motion";

const fadeInAnimationVar = {
  initial: { opacity: 0, y: 50 },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 * index, duration: 0.5 },
  }),
};
const RepoCard = ({ name, desc, url, homepage, index }) => {
  const customizeName = name.split("-").at(-1);
  return (
    <motion.div
      className=" flex  max-w-xs flex-col justify-between space-y-5 rounded-lg  bg-articleBg p-4"
      variants={fadeInAnimationVar}
      initial="initial"
      animate="animate"
      custom={index}
    >
      <h3 className=" text-xl font-semibold text-accentColor">
        {customizeName}
      </h3>
      <p className="text-lg font-medium text-textColor">{desc}</p>
      <div className="flex items-center justify-start">
        <div className="flex gap-x-3">
          <a href={url} target="_blank" rel="noreferrer">
            <img height={30} width={30} src={github_icon} alt="" />
          </a>
          <a href={homepage} target="_blank" rel="noreferrer">
            <img height={30} width={30} src={link_icon} alt="" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default RepoCard;
