import vscode from "../assets/icons/vscode.ico";

const list = ["File", "Edit", "View", "Go", "Run", "Terminal", "Help"];
const Navbar = () => {
  return (
    <header className=" bg-titlebarBg text-textColor ">
      <nav className="flex items-center justify-between text-center h-10 mx-3">
        <div className="mr-auto flex items-center md:gap-x-3 font-normal">
          <img src={vscode} height={20} width={20}></img>
          <ul className=" hidden md:flex gap-x-3 ">
            {list.map((ele, i) => {
              return (
                <li
                  className="cursor-pointer hover:bg-explorerHoverBg px-[2px]"
                  key={i}
                >
                  {ele}
                </li>
              );
            })}
          </ul>
        </div>
        <h1 className="text-bold md:mr-auto">Haitham b7r-Visual Studio Code</h1>
        <div className="ml-auto flex gap-x-2">
          <div className="w-3 h-3 rounded-full bg-yellow-200 md:h-4 md:w-4 "></div>
          <div className="w-3 h-3 rounded-full bg-green-500 md:h-4 md:w-4"></div>
          <div className="w-3 h-3 rounded-full bg-red-400 md:h-4 md:w-4"></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
