import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import "./theme.css";

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  };

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Switch a theme</p>
        <button onClick={handleToggleTheme}>Change a color</button>
      </div>
    </div>
  );
};

export default LightDarkMode;
