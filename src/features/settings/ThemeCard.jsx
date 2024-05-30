import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";

const fadeInAnimationVar = {
  initial: { opacity: 0, y: 40 },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * index, duration: 0.3 },
  }),
};
const ThemeCard = ({ name, publisher, theme, img, index }) => {
  const { changeTheme } = useTheme();
  return (
    <motion.div
      variants={fadeInAnimationVar}
      initial="initial"
      animate="animate"
      custom={index}
      className={`flex flex-col items-center justify-between gap-y-3 bg-mainBg p-4 text-center text-textColor rounded-lg  shadow-md hover:shadow-lg `}
    >
      <span>
        <img src={img} width={100} height={100} />
      </span>
      <div>
        <h3 className="text-2xl font-semibold">{name}</h3>
        <h4 className="text-base font-medium">{publisher}</h4>
      </div>
      <button
        className=" bg-accentColor px-[5px]  py-[3px] text-md font-medium rounded-md"
        onClick={() => {
          changeTheme(theme);
        }}
      >
        Set Color Theme
      </button>
    </motion.div>
  );
};

export default ThemeCard;
