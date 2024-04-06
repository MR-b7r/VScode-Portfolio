import React from "react";
import Dracula from "../../assets/images/dracula.png";
import NightOwl from "../../assets/images/night-owl.png";
import Github from "../../assets/images/github-dark.png";
import Nord from "../../assets/images/nord.png";
import Ayu from "../../assets/images/ayu.png";
import ThemeCard from "./ThemeCard";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Settings = () => {
  const themeInfo = [
    {
      name: "Dracula",
      publisher: "Dracula theme",
      theme: "dracula",
      img: Dracula,
    },
    {
      name: "NightOwl",
      publisher: "sarah.drasner",
      theme: "nightOwl",
      img: NightOwl,
    },
    {
      name: "github",
      publisher: "GitHub",
      theme: "github",
      img: Github,
    },
    {
      name: "Nord",
      publisher: "arcticicestudio",
      theme: "nord",
      img: Nord,
    },
    { name: "Ayu Mirage", publisher: "teabyii", theme: "ayuMirage", img: Ayu },
    { name: "Ayu Dark", publisher: "teabyii", theme: "ayuDark", img: Ayu },
  ];
  return (
    <HelmetProvider>
      <Helmet>
        <title>Haitham B7R | Settings</title>
      </Helmet>
      <div className="p-8">
        <h2 className="text-3xl font-semibold text-textColor mb-4 ">
          Change Theme
        </h2>
        <div className="grid xl:grid-cols-4 md:grid-cols-3 gap-5">
          {themeInfo.map((info) => (
            <ThemeCard
              key={info.name}
              name={info.name}
              img={info.img}
              publisher={info.publisher}
              theme={info.theme}
            />
          ))}
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Settings;
