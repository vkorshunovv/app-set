import { useEffect, useState } from "react";

const RandomColor = () => {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleGenerateRandomHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  };

  const handleGenerateRandomRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  };

  const containerStyle = {
    width: "100vw",
    height: "100vh",
    background: color,
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
  };

  const buttonStyle = {
    width: "10rem",
    height: "4rem",
    padding: "1rem",
    borderRadius: "1rem",
  };

  const infoStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "2rem",
    color: "#fff",
    fontSize: "2rem",
  };

  useEffect(() => {
    colorType === "hex"
      ? handleGenerateRandomHexColor
      : handleGenerateRandomRgbColor;
  }, [colorType]);

  return (
    <div className="container" style={containerStyle}>
      <button style={buttonStyle} onClick={() => setColorType("hex")}>
        Create HEX button
      </button>
      <button style={buttonStyle} onClick={() => setColorType("rgb")}>
        Create RGB color
      </button>
      <button
        style={buttonStyle}
        onClick={
          colorType === "hex"
            ? handleGenerateRandomHexColor
            : handleGenerateRandomRgbColor
        }
      >
        Generate Random Button
      </button>

      <div style={infoStyle}>
        <h3>{colorType}</h3>
        <span>{color}</span>
      </div>
    </div>
  );
};

export default RandomColor;
