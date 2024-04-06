import { createContext, useContext, useState } from "react";
/* eslint-disable react/prop-types */

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("nightOwl");

  function changeTheme(newTheme) {
    console.log(newTheme);
    setTheme(newTheme);
  }
  // useEffect(() => {
  //   document.documentElement.className.add(theme);
  // }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error("ThemeContext used outside Provider");
  return context;
}

export { useTheme, ThemeProvider };
