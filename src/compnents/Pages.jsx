import { Outlet } from "react-router-dom";
import Tabs from "./Tabs";

const Pages = () => {
  return (
    <div className="w-full overflow-x-auto">
      <Tabs />
      <section className="min-h-lvh bg-mainBg py-5">
        <Outlet />
      </section>
    </div>
  );
};

export default Pages;
