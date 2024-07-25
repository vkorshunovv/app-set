import React from "react";
import {useLocalStorage} from "./useLocalStorage";

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("dark", "light");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="light-dark-mode">
      <div className="container">
        <p>Switch a theme</p>
        <button onClick={handleToggleTheme}>Change a color</button>
      </div>
    </div>
  );
};

export default LightDarkMode;
