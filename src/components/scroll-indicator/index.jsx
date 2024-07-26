import React, { useEffect, useState } from "react";
import "./style.css";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState("");

  const getData = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      if (data && data.length > 0) {
        setData(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  function handleScrollPercentage() {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    getData(url);
  }, [url]);

  useEffect(() => {
    document.addEventListener("scroll", handleScrollPercentage);

    return document.removeEventListener("scroll", () => {}, []);
  });

  if (errorMessage) {
    return <div className="error">Error: {errorMessage}</div>;
  }

  if (isLoading) {
    return <div className="loading">Movies are loading...</div>;
  }

  return (
    <>
      <div className="container">
        <div className="top-header-container">
          <h1>Custom Scroll Indicator</h1>
          <div className="scroll-indicator-container">
            <div
              className="scroll-indicator"
              style={{ width : `${scrollPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="data-container">
          {data && data.length > 0
            ? data.map((item) => <p key={item.id}>{item.movie}</p>)
            : null}
        </div>
      </div>
    </>
  );
};

export default ScrollIndicator;
