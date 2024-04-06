import React from "react";
import react_icon from "../assets/icons/react_icon.svg";
import html_icon from "../assets/icons/html_icon.svg";
import css_icon from "../assets/icons/css_icon.svg";
import js_icon from "../assets/icons/js_icon.svg";
import json_icon from "../assets/icons/json_icon.svg";
import markdown_icon from "../assets/icons/markdown_icon.svg";
import { Link, useLocation } from "react-router-dom";

const tapsItems = [
  {
    name: "home.jsx",
    icon: `${react_icon}`,
    path: "/",
  },
  {
    name: "about.html",
    icon: `${html_icon}`,
    path: "/about",
  },

  {
    name: "contact.css",
    icon: `${css_icon}`,
    path: "/contact",
  },
  {
    name: "projects.js",
    icon: `${js_icon}`,
    path: "/projects",
  },
  {
    name: "github.md",
    icon: `${markdown_icon}`,
    path: "/github",
  },
];

const Tabs = () => {
  const location = useLocation();
  return (
    <ul className="flex items-center overflow-x-auto bg-tabsBg">
      {tapsItems.map((item) => (
        <Link
          to={item.path}
          key={item.name}
          className={`flex gap-x-1 items-center border-tabBorder text-textColor px-2 py-[2px] min-w-max hover:bg-tabActiveBg ${
            location.pathname === item.path
              ? "border-t-2 border-t-accentColor bg-tabActiveBg"
              : "border-2 bg-tabBg"
          }`}
        >
          <img src={item.icon} alt={item.name} className="h-[22px] w-[22px]" />
          <p className="text-base font-medium">{item.name}</p>
        </Link>
      ))}
    </ul>
  );
};

export default Tabs;
