import Code from "./icons/CodeIcon";
import Files from "./icons/FilesIcon";
import Github from "./icons/GithubIcon";
import Mail from "./icons/MailIcon";
import Account from "./icons/AccountIcon";
import Settings from "./icons/SettingsIcon";
import { Link } from "react-router-dom";

const sidebarTopItems = [
  {
    Icon: Files,
    path: "/",
  },
  {
    Icon: Github,
    path: "/github",
  },
  {
    Icon: Code,
    path: "/projects",
  },
  {
    Icon: Mail,
    path: "/contact",
  },
];
const sidebarBottomItems = [
  {
    Icon: Account,
    path: "/about",
  },
  {
    Icon: Settings,
    path: "/settings",
  },
];
const Sidebar = () => {
  return (
    <div className="flex justify-between items-center flex-col min-h-full min-w-[40px] w-[4.2vw] py-2 min-h-[calc(100vh-65px)] bg-sidebarBg ">
      <div className="flex flex-col items-start justify-center gap-y-2 md:gap-y-3">
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link to={path} key={path}>
            <div className="p-2 w-[45px] h-[45px] ">
              <Icon fill={"rgb(106, 115, 125)"} />
            </div>
          </Link>
        ))}
      </div>
      <div className="flex flex-col items-start justify-center gap-y-3">
        {sidebarBottomItems.map(({ Icon, path }) => (
          <Link to={path} key={path}>
            <div className="p-2  w-[40px] h-[40px] md:w-[45px] md:h-[45px] ">
              <Icon fill={"rgb(106, 115, 125)"} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
