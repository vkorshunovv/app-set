import React from "react";

const LightDarkMode = () => {
  const [theme, useTheme] = useCurrentStorage("dark", "light");


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
