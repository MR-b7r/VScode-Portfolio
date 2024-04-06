import SourceControlIcon from "./icons/SourceControlIcon";
import WarningIcon from "./icons/WarningIcon";
import ErrorIcon from "./icons/ErrorIcon";
import ReactIcon from "./icons/ReactIcon";
import CheckIcon from "./icons/CheckIcon";
import BellIcon from "./icons/BellIcon";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center h-8 px-4 sm:text-lg text-sm bg-bottombarBg text-textColor">
      <div className="flex items-center gap-x-3 h-full">
        <a
          className="flex items-center hover:bg-bottombarHoverBg px-2"
          target="_blank"
          href="https://github.com/MR-b7r"
        >
          <SourceControlIcon />
        </a>
        <div className="flex cursor-pointer gap-x-1 hover:bg-bottombarHoverBg px-2">
          <ErrorIcon />
          <WarningIcon />
        </div>
      </div>

      <div className="flex items-center gap-x-3 px-2 h-full">
        <ReactIcon />
        <CheckIcon />
        <div className=" cursor-pointer hover:bg-bottombarHoverBg px-2 py-2">
          <BellIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
