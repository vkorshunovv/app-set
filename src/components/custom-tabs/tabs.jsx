import React, { useState } from "react";
import { tabsContent } from "./tabs-test";

const CustomTabs = () => {
  const [tabIndex, setTabIndex] = useState("");

  function handleClick(index) {
    setTabIndex(index);
  }

  return (
    <div className="custom-tabs">
      <div className="tabs-container">
        {tabsContent.map((tabItem, index) => (
          <>
            <div key={tabItem.id} onClick={() => handleClick(index)}>
              {tabItem.label}
            </div>
          </>
        ))}
        <div>{tabsContent[tabIndex] && tabsContent[tabIndex].content}</div>
      </div>
    </div>
  );
};

export default CustomTabs;
