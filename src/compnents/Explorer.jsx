import ChevronRight from "./icons/ChevronRight";
import react_icon from "../assets/icons/react_icon.svg";
import html_icon from "../assets/icons/html_icon.svg";
import css_icon from "../assets/icons/css_icon.svg";
import js_icon from "../assets/icons/js_icon.svg";
import markdown_icon from "../assets/icons/markdown_icon.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const explorerItems = [
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
const Explorer = () => {
  const [isOpened, setIsOpened] = useState(true);
  return (
    <div className="sm:flex hidden flex-col bg-explorerBg text-white  items-start px-2 min-w-[150px]">
      <h1 className="font-medium text-[21px] uppercase mb-2">Explorer</h1>
      <div className="flex flex-col pl-2 min-w-[15vw]">
        <div
          className="flex items-center justify-start"
          onClick={() => setIsOpened(!isOpened)}
        >
          <ChevronRight
            style={
              isOpened
                ? { transform: "rotate(90deg)", transition: " .2s linear" }
                : { transition: " .2s linear" }
            }
          />
          <p className="text-lg font-semibold ml-1">PORTFOLIO</p>
        </div>
        {isOpened && (
          <ul>
            {explorerItems.map((item) => (
              <Link
                to={item.path}
                key={item.name}
                className="flex gap-x-1 items-center hover:bg-explorerHoverBg mb-1 text-sm "
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-[22px] w-[22px]"
                />
                <p className="text-base font-medium">{item.name}</p>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Explorer;
