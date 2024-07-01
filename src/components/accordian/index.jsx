import "./style.css";
import data from "./data";
import { useState } from "react";

const Accordian = () => {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (currentId) => {
    setSelected(currentId);
    console.log(currentId);
  };

  return (
    <div className="wrapper">
      {data && data.length > 0 ? (
        data.map((dataItem) => (
          <div
            onClick={() => handleSingleSelection(dataItem.id)}
            className="title"
            key={dataItem.id}
          >
            <h3>{dataItem.question}</h3>
            <span>+</span>
            {selected === dataItem.id ? <div>{dataItem.answer}</div> : null}
          </div>
        ))
      ) : (
        <div>Data not found!</div>
      )}
    </div>
  );
};

export default Accordian;
