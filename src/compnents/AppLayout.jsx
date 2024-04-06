import NavBar from "./Navbar";
import Sidebar from "./Sidebar";
import Explorer from "./Explorer";
import Pages from "./Pages";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";

const AppLayout = () => {
  const { theme } = useTheme();
  console.log(theme);
  return (
    <div className={`${theme}`}>
      <NavBar />
      <main className="flex ">
        <Sidebar />
        <Explorer />
        <Pages />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
