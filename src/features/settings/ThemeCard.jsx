import React from "react";
import { useTheme } from "../../context/ThemeContext";

const ThemeCard = ({ name, publisher, theme, img }) => {
  const { changeTheme } = useTheme();
  return (
    <div
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
    </div>
  );
};

export default ThemeCard;
